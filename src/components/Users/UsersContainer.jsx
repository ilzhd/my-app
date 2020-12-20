import React from "react";
import {connect} from "react-redux";
import {followAC, setUsersAC, unFollowAC} from "../../redux/usersReducer";
import Users from "./Users";

let mapStateToProps = (state) =>{
    return{
        users: state.usersPage.users
    }
}

let mapDispatchToPropsToProps = (dispatch) =>{
    return{
        follow: (userId) =>{
            dispatch(followAC(userId))
        },
        unfollow: (userId) =>{
            dispatch(unFollowAC(userId))
        },
        setUsers: (users) =>{
            dispatch(setUsersAC(users))
        }
    }
}

const UsersContainer = connect(mapStateToProps,mapDispatchToPropsToProps)(Users)

export default UsersContainer;