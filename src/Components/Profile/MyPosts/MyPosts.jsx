import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {

    const posts = [
        {id: 1, message: 'Hi, how are you?', likesCount: 0},
        {id: 2, message: '1231231231', likesCount: 23},
        {id: 3, message: 'Fine thanks and you?', likesCount: 26}
    ];

    const postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    return (
        <div className={s.postsBlock}>
            <h3>
                My posts
            </h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
                <button>Remove</button>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    )
}

export default MyPosts;