import React from 'react';
import './App.css';
import Nav from "./components/Nav/Nav";
import {Route} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import ProfileContainer from "./components/Profile/ProfileContainer";
import ToDoContainer from "./components/ToDo/ToDoContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import Preloader from "./components/common/preloader/preloader";
import {initializeApp} from "./redux/appReducer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import {
    getAllUsers,
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount
} from "./redux/usersSelectors";


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if(this.props.initialized === false){
            return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Nav/>
                <div className='app-wrapper__content'>
                    <Route path='/dialogs'
                           render={() => <DialogsContainer store={this.props.store}/>}/>
                    <Route path='/profile/:userId?'
                           render={() => <ProfileContainer/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/ToDo' render={() => <ToDoContainer/>}/>
                    <Route path='/Login' render={() => <Login/>}/>
                </div>
            </div>

        );


    }
}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}

export default connect(mapStateToProps, {initializeApp})(App)


// let mapStateToProps = (state) => {
//     return {
//         users: getAllUsers(state),
//         pageSize: getPageSize(state),
//         totalUsersCount: getTotalUsersCount(state),
//         currentPage: getCurrentPage(state),
//         isFetching: getIsFetching(state),
//         followingInProgress: getFollowingInProgress(state),
//     }
// }
