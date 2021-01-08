import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

function Header(props) {
    return (
        <header className={s.header}>
            <img
                src='https://upload.wikimedia.org/wikipedia/ru/thumb/f/fd/AndCards_Logotype.svg/1200px-AndCards_Logotype.svg.png'/>
            <div className={s.loginBlock}>
                {props.isAuth? props.login :
                <NavLink to={'/login'}>Login</NavLink> }
            </div>
        </header>
    )
}
export default Header;