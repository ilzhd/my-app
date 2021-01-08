import {authApi, usersApi} from "../api/api";
import {followSuccess, toggleFollowingProgress} from "./usersReducer";

const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        default:
            return state;
    }
}

export const setUserData = (id, email, login) => ({type: SET_USER_DATA, data: {id, email, login}});
export const setUser = () => {
    return (dispatch) => {
        authApi.authMe()
            .then(data => {
                if (data.resultCode ===0) {
                    let {id, email, login} = data.data
                    dispatch(setUserData(id, email, login))
                }
            });
    }
}


export default authReducer;





