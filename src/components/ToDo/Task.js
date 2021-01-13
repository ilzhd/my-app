import React from 'react';

class Task extends React.Component {
    state = {
        editMode: false,
        task: this.props.title
    }
    componentDidUpdate(prevProps, prevState) {
        let a = this.props
        let b = this.state
        console.log('cdu')
        if(prevProps.title!== this.props.title){
            this.setState({
                task: this.props.title
            })
        }
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deActivateEditMode = (e) => {
        let body= e.target.value
        this.props.editTask(this.props.id, body)
        this.setState({
            editMode: false
        })
    }

    taskOnChange = (e) =>{
        this.setState({
            task: e.target.value
        })
    }




    render() {
        console.log('render')
        return <div>
            {!this.state.editMode &&
            <div>
                <ol onDoubleClick={this.activateEditMode}>{this.props.title}</ol>
            </div>
            }
            {this.state.editMode &&
            <div>
                <textarea onChange={this.taskOnChange} autoFocus={true} onBlur={this.deActivateEditMode}
                       onDoubleClick={this.deActivateEditMode}
                       value={this.state.task} />
            </div>
            }
            <button onClick={() => {
                this.props.deleteTask(this.props.id)
            }}>delete
            </button>
        </div>
    }

}

export default Task;
