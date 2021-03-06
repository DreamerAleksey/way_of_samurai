import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return (
                    <div className={s.item}>
                        <img src="https://fiverr-res.cloudinary.com/videos/t_main1,q_auto,f_auto/xptfcdnzlhnku47bauao/draw-your-roblox-or-minecraft-avatar-into-cartoon-style.png" alt="avatar"/>
                        {props.message}
                        <div>
                            <span>like </span> {props.likesCount}
                        </div>
                    </div>
    )
}

export default Post;