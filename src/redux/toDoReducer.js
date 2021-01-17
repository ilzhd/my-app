import React from 'react'
import {ToDoApi} from "../api/api";

const SEND_TASK = 'SEND_TASK';
const UPDATE_TASK_BODY = 'UPDATE_TASK_BODY';
const GET_TASK = 'GET_TASK'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
let initialState = {
    task: [],
    isFetching: false,
    newTaskBody: '',
    body: ''
}

const ToDoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_TASK:
            let message = action.title
            return {
                ...state,
                newTaskBody: '',
                task: message, ...state.task
            }
        case GET_TASK:
            return {...state, task: action.task, newTaskBody: ''}
        case UPDATE_TASK_BODY:
            return {
                ...state,
                newTaskBody: action.body
            }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }

        default:
            return state;
    }
}

export const getTaskMessage = (task) => ({type: GET_TASK, task});
export const updateTaskBody = (body) => ({type: UPDATE_TASK_BODY, body});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export const getTask = () => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        ToDoApi.getTask().then(data => {
                    dispatch(getTaskMessage(data))
                    dispatch(toggleIsFetching(false));
            }
        )
    }
}

export const sendTask = (title) => (dispatch) => {
    dispatch(toggleIsFetching(true));
    ToDoApi.postTask(title).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getTask())
            }
        }
    )
}

export const deleteTask = (taskId) => (dispatch) => {
    dispatch(toggleIsFetching(true));
    ToDoApi.deleteTask(taskId).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getTask())
            }
        }
    )
}
export const editTask = (taskId, title) => (dispatch) => {
    debugger
    dispatch(toggleIsFetching(true));
    ToDoApi.editTask(taskId, title).then(data => {
            if (data.resultCode === 0) {
                dispatch(getTask())
            }
        }
    )
}

export default ToDoReducer;