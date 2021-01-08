import React from 'react'

const SEND_TASK = 'SEND_TASK';
const UPDATE_TASK_BODY = 'UPDATE_TASK_BODY';

let initialState = {
    task: [],
    newTaskBody: '',
}

const ToDoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_TASK:
            let body = state.newTaskBody;
            return {
                ...state,
                newTaskBody: '',
                task: [...state.task, {id: 5, message: body}]
            }
        case UPDATE_TASK_BODY:
            return {
                ...state,
                newTaskBody: action.body
            }
        default:
            return state;
    }
}


export const sendTask = (task) => ({type: SEND_TASK, task});
export const updateTaskBody = (body) => ({type: UPDATE_TASK_BODY, body})

export default ToDoReducer;