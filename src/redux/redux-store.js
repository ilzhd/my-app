import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sideBarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import ToDoReducer from "./toDoReducer";
import authReducer from "./auth-Reducer";
import thunkMiddleware  from 'redux-thunk'

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer,
    toDo: ToDoReducer,
    auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;