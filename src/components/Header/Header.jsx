import React from 'react';
import s from './Header.module.css';

function Header() {
    return (
        <header className={s.header}>
            <img
                src='https://upload.wikimedia.org/wikipedia/ru/thumb/f/fd/AndCards_Logotype.svg/1200px-AndCards_Logotype.svg.png'/>
        </header>
    )
}
export default Header;