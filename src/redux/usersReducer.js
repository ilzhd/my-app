const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users:[]
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
            return { ...state, users: [...state.users,...action.users]}
        }

        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unFollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});

export default usersReducer;





