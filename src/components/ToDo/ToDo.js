import React from 'react';
import s from './ToDo.module.css'
import Task from "./Task";
let ToDo = (props) => {
    let newTaskBody = props.newTaskBody;
    let taskElements = props.task.map(t => {
        return <Task id={t.id} message={t.message}/>});

    let onSendTaskClick = () => {
        props.sendTask()
    }

    let onNewTaskClick = (e) => {
        let body = e.target.value;
        props.updateTaskBody(body)
    }


    return <div className={s.container}>
        <div className={s.name}>To DO list</div>
        <div>{taskElements}</div>
        <textarea className={s.textarea} placeholder={'enter...'} value={newTaskBody} onChange={onNewTaskClick}/>
        <div>
            <button onClick={onSendTaskClick} >Send</button>
        </div>
    </div>
}

export default ToDo;