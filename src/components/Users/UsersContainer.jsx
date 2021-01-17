import React from "react";
import Preloader from "../common/preloader/preloader";
import Users from "./Users";
import {connect} from "react-redux";
import {followed, getUsers, setCurrentPage, unfollowed} from "../../redux/usersReducer";
import {compose} from "redux";
import {
    getAllUsers,
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount
} from "../../redux/usersSelectors";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render = () => {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users users={this.props.users}
                   followed={this.props.followed}
                   unfollowed={this.props.unfollowed}
                   totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   onPageChanged={this.onPageChanged}
                   currentPage={this.props.currentPage}
                   followingInProgress={this.props.followingInProgress}

            />
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        users: getAllUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}




export default compose(
    connect(mapStateToProps, {
        setCurrentPage, unfollowed, followed, getUsers
    }),
    //AuthRedirect
)(UsersContainer)

