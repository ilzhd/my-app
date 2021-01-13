import React from 'react';
import s from './ProfileInfo.module.css'
import {usersApi} from "../../../../api/api";
import Preloader from "../../../common/preloader/preloader";


class ProfileStatus extends React.Component {
    componentDidMount() {
        this.props.getStatusProfile(this.props.profile.userId)
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status!== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deActivateEditMode = () => {
        this.props.updateStatusProfile(this.state.status)
        this.setState({
            editMode: false
        })
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.target.value
        })
    }

    render() {
        if (this.props.isFetching === true) {
            return <Preloader/>
        } else {
            return (
                <div>
                    {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    </div>
                    }
                    {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deActivateEditMode}
                               onDoubleClick={this.deActivateEditMode} value={this.state.status}></input>
                    </div>
                    }
                </div>
            )
        }
    }
}

export default ProfileStatus;