import React from 'react';
import s from './ProfileInfo.module.css';

function ProfileInfo() {
    return (
        <div>
            <div>
                <div className={s.item}></div>
            </div>
            <div className={s.descriptionBlock}>
                ava+discription
            </div>
        </div>
    )
}

export default ProfileInfo;