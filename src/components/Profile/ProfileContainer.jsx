import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatusProfile, getUserProfile, updateStatusProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 13731;
        }
        this.props.getUserProfile(userId)
    }

    render() {
        return <Profile {...this.props}/>
    }
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    isFetching: state.toDo.isFetching

})

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatusProfile, updateStatusProfile}),
    withRouter,
    //AuthRedirect
)(ProfileContainer)
