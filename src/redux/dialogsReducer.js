const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
    dialogs: [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Dina'},
        {id: 3, name: 'Ilya'},
        {id: 2, name: 'Dina'},
        {id: 3, name: 'Ilya'},
        {id: 4, name: 'Buba'}
    ],
    messages: [
        {id: 1, message: 'Hi, how a u?'},
        {id: 2, message: 'I Love U'},
        {id: 3, message: 'archive.zip'},
        {id: 2, message: 'I Love U'},
        {id: 3, message: 'archive.zip'},
        {id: 4, message: 'ahahaha'},
    ],
};

const dialogsReducer = (state = initialState, action) =>{
    switch (action.type) {
        case SEND_MESSAGE:
            return  {
                ...state,
                messages: [...state.messages, {id: 5, message: action.message}],

            }
        default:
            return state;
    }
}

export const sendMessageCreator = (message) => ({ type: SEND_MESSAGE, message })
export default dialogsReducer;