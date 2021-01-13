import React from 'react';
import {connect} from "react-redux";
import {deleteTask, editTask, getTask, sendTask, updateTaskBody} from "../../redux/toDoReducer";
import Preloader from "../common/preloader/preloader";
import ToDo from "./ToDo";

class ToDoContainer extends React.Component {
    componentDidMount() {
        this.props.getTask()
    }

    render = () => {
        if (this.props.isFetching === true) {
            return <Preloader/>
        } else {
            return <ToDo task={this.props.task}
                         newTaskBody={this.props.newTaskBody}
                         updateTaskBody={this.props.updateTaskBody}
                         getTask={this.props.getTask}
                         sendTask={this.props.sendTask}
                         deleteTask={this.props.deleteTask} editTask={this.props.editTask}/>
        }
    }
}


let mapStateToProps = (state) => {
    return {
        task: state.toDo.task,
        newTaskBody: state.toDo.newTaskBody,
        isFetching: state.toDo.isFetching
    }
}


export default connect(mapStateToProps, {updateTaskBody, getTask, sendTask, deleteTask, editTask})(ToDoContainer)