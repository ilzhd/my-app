import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../../common/preloader/preloader";

function ProfileInfo(props) {
    if (!props.profile) {
        return <Preloader/>
    }
    let contacts = [];
    for (const [key, value] of Object.entries(props.profile.contacts)) {
        contacts.push(value);
    }
    return (
        <div>
            <div>
                <div className={s.item}></div>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <p>{props.profile.fullName}</p>
                <p>В поиске работы: {props.profile.lookingForAJobDescription}</p>
                <p> Social:
                    <p>{contacts.map(c=>{
                        return <p><a href={c}>{c}</a></p>
                    })}</p>
                </p>

            </div>
        </div>
    )
}

export default ProfileInfo;