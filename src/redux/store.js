import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sideBarReducer from "./sidebarReducer";



let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how a u?', likes: 99999},
                {id: 2, message: 'Iam BATMAN', likes: 999999999},
            ],
        },

        dialogsPage: {
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
        },

        sideBar:{
            friends:[
                {name: "Dina", id: 1},
                {name: "Igor", id: 2},
                {name: "Buba", id: 3}
            ]
        }

    },
    _callSubscribers() {
        console.log('state was changed')

    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscribers = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage,action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action);
        this._state.sideBar = sideBarReducer(this._state.sideBar,action);

        this._callSubscribers(this._state);

    }
}


export default store;
window.store = store;
