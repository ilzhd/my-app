import {profileApi} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const GET_PROFILE_STATUS = 'GET_PROFILE_STATUS'
const UPDATE_STATUS = 'UPDATE_STATUS'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how a u?', likes: 99999},
        {id: 2, message: 'Iam BATMAN', likes: 999999999},
    ],
    profile: null,
    isFetching: false,
    status: null
};

const profileReducer = (state= initialState,action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: action.newPostElement,
                likes: 0
            };
            return {
                ...state,
                posts: [newPost,...state.posts],
                newPostsText: ''

            }
            case SET_USER_PROFILE:
            return  {
                ...state,
                profile: action.profile
            }
            case GET_PROFILE_STATUS:
            return  {
                ...state,
                status: action.status
            }
            case UPDATE_STATUS:
            return  {
                ...state,
                status: action.status
            }
            case TOGGLE_IS_FETCHING: {
                return {...state, isFetching: action.isFetching}
            }
        default:
            return state;

    }
}
export const addPostActionCreator = (newPostElement) => ({ type: ADD_POST, newPostElement });
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setProfileStatus = (status) => ({type: GET_PROFILE_STATUS, status});
export const updateStatus = (status) => ({type: UPDATE_STATUS, status});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})




export const getUserProfile = (userId) =>{
    return (dispatch) =>{
        dispatch(toggleIsFetching(true));
        profileApi.getProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data));
                dispatch(toggleIsFetching(false));
            });
    }
}

export const getStatusProfile = (userId) => (dispatch) =>{
    dispatch(toggleIsFetching(true));
    profileApi.getStatus(userId)
        .then(data =>{
            dispatch(setProfileStatus(data))
            dispatch(toggleIsFetching(false));
        })
}

export const updateStatusProfile = (status) => (dispatch) =>{
    dispatch(toggleIsFetching(true));
    profileApi.updateStatus(status)
        .then(data =>{
            dispatch(updateStatus(status))
            dispatch(toggleIsFetching(false));
        })
}

export default profileReducer;
