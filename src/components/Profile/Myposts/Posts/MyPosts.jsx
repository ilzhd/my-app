import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post";
import {Field, reduxForm} from "redux-form";
import {
    maxLengthCreator,
    minLengthCreator,
    required
} from "../../../../utils/validators/validators";
import {Textarea} from "../../../common/formsControl/formsControl";


function MyPosts(props) {

    let postsElements = props.posts.map(post => <Post key={post.id} message={post.message} Likes={post.likes}/>);

    const addNewPost = (values) => {
        props.addPost(values.newPostElement);
    }

    return (
        <div className={s.postsBlock}>
            <h1>My posts</h1>
            <NewReduxPost onSubmit={addNewPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>

    )
}
let maxLength10 = maxLengthCreator(10)
let minLength2 = minLengthCreator(2)
const NewPost = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field name={"newPostElement"} component={Textarea} placeholder={"Post message"}
               validate={[required, maxLength10, minLength2]}>
        </Field>
        <div>
            <button>Add post</button>
        </div>
    </form>
}

const NewReduxPost = reduxForm({form: "newPost"})(NewPost)


export default MyPosts;