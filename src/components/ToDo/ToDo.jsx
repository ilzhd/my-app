import React from 'react';
import s from './ToDo.module.css'
import Task from "./Task";

let ToDo = (props) => {
    let task = props.task;
    let newTaskBody = props.newTaskBody;



    let taskMessage = React.createRef()


    let onSendTaskClick = () => {

        let title = taskMessage.current.value;
        props.sendTask(title)
    }

    let onNewTaskClick = (e) => {
        let body = e.target.value;
        props.updateTaskBody(body)
    }
    return <div className={s.container}>
        <div className={s.name}>To DO list</div>
        <div>
            {
                task.map(t => {
                    return <Task title={t.title}
                                 id={t.id}
                                 deleteTask={props.deleteTask}
                                 editTask={props.editTask}
                                 getTask={props.getTask}/>
                })

            }
        </div>
        <textarea className={s.textarea} placeholder={'enter...'} value={newTaskBody} ref={taskMessage}
                  onChange={onNewTaskClick}/>
        <div>
            <button onClick={onSendTaskClick}>Send</button>
        </div>
    </div>
}

export default ToDo;