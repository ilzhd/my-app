import React from 'react';
import MyPosts from "./Myposts/Posts/MyPosts";
import ProfileInfo from "./Myposts/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./Myposts/Posts/MyPostsContainer";
import {Redirect} from "react-router-dom";


function Profile(props) {
    return (
        <div>
            <ProfileInfo {...props} />
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;