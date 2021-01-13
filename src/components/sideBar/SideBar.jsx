import React from 'react';
import s from './sideBar.module.css';
import Friends from "./Friends";

const SideBar = (props) => {

    let friendsElements = props.state.map(friends => <Friends name={friends.name} key={friends.id}/>)

    return (
        <div>
            <div className={s.container}>
                    {friendsElements}
            </div>
        </div>
    )
}
export default SideBar;