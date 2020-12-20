import React from 'react';
import './App.css';
import Nav from "./components/Nav/Nav";
import {BrowserRouter, Route} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";







function App(props) {
    return (
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper__content'>
                    <Route path='/dialogs'
                           render = { () => <DialogsContainer store={props.store}/> }/>
                    <Route path='/profile'
                           render = { () => <Profile store = {props.store}/>}/>
                    <Route path='/users' render = { () => <UsersContainer/>}/>
                    <Route path='/news' render = { () => <News />}/>
                    <Route path='/music' render = { () => <Music />}/>
                    <Route path='/settings' render = { () => <Settings />}/>
                </div>
            </div>

    );
}

export default App;
