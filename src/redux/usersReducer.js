import {usersApi} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users:[],
    pageSize: 20,
    totalUsersCount: 20,
    isFetching: true,
    followingInProgress: [],
    currentPage: 1
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    switch (u.id) {
                        case action.userId:
                            return {...u, followed: true};
                        default:
                            return u;
                    }
                }),
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    switch (u.id) {
                        case action.userId:
                            return {...u, followed: false};
                        default:
                            return u;
                    }
                }),
            }
        case SET_USERS: {
            return { ...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.pageNumber}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.totalCount}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress,action.userId]
                    : [state.followingInProgress.filter(id=> id!=action)]}
        }

        default:
            return state;
    }
}

export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (pageNumber) => ({type: SET_CURRENT_PAGE, pageNumber})
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching })
export const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        usersApi.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount))
            dispatch(setCurrentPage(currentPage))
        });
    }
}

export const unfollowed = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersApi.unfollow(userId).then(data => {
            if (data.resultCode === 0){
                dispatch(unfollowSuccess(userId));
            }
            dispatch(toggleFollowingProgress(false, userId));
        });
    }
}

export const followed = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersApi.follow(userId).then(data => {
            if (data.resultCode === 0){
                dispatch(followSuccess(userId));
            }
            dispatch(toggleFollowingProgress(false, userId))
        });
    }
}

export default usersReducer;





