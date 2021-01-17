import React from 'react';
import s from './ToDo.module.css'
import Task from "./Task";
import {Field, reduxForm} from "redux-form";
import handleSubmit from "redux-form/lib/handleSubmit";

let ToDo = (props) => {
    let task = props.task;

    const NewTask = (props) => {
        return <form onSubmit={props.handleSubmit}>
            <Field component={"textarea"} name={"title"}/>
            <div>
                <button>Send</button>
            </div>
        </form>
    }

    const NewReduxTask = reduxForm({form: "task"})(NewTask)


    let onSendTaskClick = (values) =>{
        props.sendTask(values.title)
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
        <NewReduxTask onSubmit={onSendTaskClick}/>
    </div>
}

export default ToDo;