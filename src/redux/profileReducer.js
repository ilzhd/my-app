const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how a u?', likes: 99999},
        {id: 2, message: 'Iam BATMAN', likes: 999999999},
    ],
    newPostsText:''
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
        default:
            return state;

    }
}
export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT , newText: text });
export default profileReducer;
