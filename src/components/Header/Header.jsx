import React from 'react';
import s from './Header.module.css';
import {NavLink, Redirect} from "react-router-dom";
import logo from '../../assets/images/logo.png'

function Header(props) {
    let button = () =>{
        return <div>
            {props.isAuth
                ? <div>{props.login}<button onClick={() => props.logOut()}>LogOut</button></div>
                :<NavLink to={'/login'}>Login</NavLink>
            }
        </div>
    }

return (
    <header className={s.header}>
        <img
            src={logo}/>
        <div className={s.loginBlock}>
            {button()}
        </div>
    </header>
)
}
export default Header;
