import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post";


function MyPosts(props) {

    let postsElements = props.posts.map( post => <Post key={post.id} message={post.message} Likes={post.likes}/>);

    let newPostElement = React.createRef();

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    let onAddPost = () =>{
        props.addPost();
    }

    return (
        <div className={s.postsBlock}>
            <h1>My posts</h1>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostsText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>

    )
}

export default MyPosts;