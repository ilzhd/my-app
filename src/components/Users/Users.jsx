import React from 'react';
import userPhoto from '../../assets/images/user.png';
import s from './Users.module.css'
import {NavLink, Redirect} from "react-router-dom";

let Users = (props) => {
    let pageNumber = Math.ceil(props.totalUsersCount / props.pageSize);
    let page = [];
    for (let i = 1; i <= pageNumber; i++) {
        page.push(i)
    }

    return <div className={s.container}>
        {
            props.users.map(u => {
                return <div key={u.id}>
            <span>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {u.followed
                        ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            props.unfollowed(u.id)
                        }}>Unfollow</button>
                        : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            props.followed(u.id)
                        }}>Follow</button>}
            </div>
                </span>
                    <span>
                    <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div>
                </span>
            </span>
                </div>
            })
        }
        <div>
            {page.map(p => {
                return <span key={p.id} onClick={(e) => {
                    props.onPageChanged(p)
                }}
                             className={props.currentPage === p ? s.selectPage : s.pageNumber}> {p} </span>
            })}
        </div>
    </div>
}

export default Users;