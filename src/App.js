import React from 'react';
import './App.css';
import Nav from "./components/Nav/Nav";
import {Route} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import ToDoContainer from "./components/ToDo/ToDoContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";







function App(props) {
    return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Nav/>
                <div className='app-wrapper__content'>
                    <Route path='/dialogs'
                           render = { () => <DialogsContainer store={props.store}/> }/>
                    <Route path='/profile/:userId?'
                           render = { () => <ProfileContainer />}/>
                    <Route path='/users' render = { () => <UsersContainer/>}/>
                    <Route path='/news' render = { () => <News />}/>
                    <Route path='/music' render = { () => <Music />}/>
                    <Route path='/settings' render = { () => <Settings />}/>
                    <Route path='/ToDo' render={ () => <ToDoContainer/> } />
                    <Route path='/Login' render={() => <Login/> } />
                </div>
            </div>

    );
}

export default App;
