import React from 'react';
import {connect} from "react-redux";
import ToDo from "./ToDo";
import {sendTask, updateTaskBody} from "../../redux/toDoReducer";
import * as axios from "axios";

class ToDoContainer extends React.Component {
    componentDidMount() {
        // axios.get(`https://social-network.samuraijs.com/api/1.1/todo-lists`, {
        //     withCredentials: true
        // })
        //     .then(response => {
        //         this.props.updateTaskBody(response.data);
        //     });
    }

    render() {
        return <ToDo {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        task: state.toDo.task,
        newTaskBody: state.toDo.newTaskBody
    }
}



export default connect(mapStateToProps, {sendTask,updateTaskBody})(ToDoContainer)