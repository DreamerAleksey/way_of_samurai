import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostText} from "../../../redux/profileReducer";

const MyPosts = (props) => {


    const postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    const newPostElement = React.createRef();

    const addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    const onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostText(text));
    }

    return (
        <div className={s.postsBlock}>
            <h3>
                My posts
            </h3>
            <div>
                <div>
                    <textarea
                        ref={newPostElement}
                        onChange={onPostChange}
                        value={props.newPostText}
                    />
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
                <button>Remove</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;