import {profileApi} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how a u?', likes: 99999},
        {id: 2, message: 'Iam BATMAN', likes: 999999999},
    ],
    newPostsText:'',
    profile: null
};

const profileReducer = (state= initialState,action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostsText,
                likes: 0
            };
            return {
                ...state,
                posts: [newPost,...state.posts],
                newPostsText: ''

            }
        case UPDATE_NEW_POST_TEXT:
            return  {
                ...state,
                newPostsText: action.newText
            }
            case SET_USER_PROFILE:
            return  {
                ...state,
                profile: action.profile
            }
        default:
            return state;

    }
}
export const addPostActionCreator = () => ({ type: ADD_POST });
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT , newText: text });

export const getUserProfile = (userId) =>{
    return (dispatch) =>{
        if (!userId) {
            userId = 2;
        }
        profileApi.setProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data));
            });
    }
}

export default profileReducer;
