import React from 'react';
import MyPosts from "./Myposts/Posts/MyPosts";
import ProfileInfo from "./Myposts/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./Myposts/Posts/MyPostsContainer";



function Profile(props) {
    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer  />
        </div>
    )
}

export default Profile;