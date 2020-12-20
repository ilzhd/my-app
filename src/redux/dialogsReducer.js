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
    newMessageBody: '',
};

const dialogsReducer = (state = initialState, action) =>{
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return  {
                ...state,
                newMessageBody: action.body
            }
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return  {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 5, message: body}],

            }
        default:
            return state;
    }
}

export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY , body: body })
export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export default dialogsReducer;