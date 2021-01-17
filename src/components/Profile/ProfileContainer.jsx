import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatusProfile, getUserProfile, updateStatusProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router";
import {compose} from "redux";
import {getUser} from "../../redux/auth-Reducer";


class ProfileContainer extends React.Component {


    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId
            if (!userId){
                 this.props.history.push("/login")
            }
        }
        this.props.getUserProfile(userId)
        this.props.getStatusProfile()
    }



    render() {
        return <Profile {...this.props}/>
    }
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    isFetching: state.toDo.isFetching,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth
})

export default compose(
    connect(mapStateToProps, {getUser, getUserProfile, getStatusProfile, updateStatusProfile}),
    withRouter,
    //AuthRedirect
)(ProfileContainer)
