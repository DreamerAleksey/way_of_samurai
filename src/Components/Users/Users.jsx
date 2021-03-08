import React from "react";
import styles from "./Users.module.css";
import DEFAULT_AVATAR from "../../assets/images/avatar.jpg";
import {NavLink} from "react-router-dom";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            <div>
                {pages.map((e, index) => {
                    return <span
                        className={props.currentPage === e && styles.selectedPage}
                        key={index}
                        onClick={() => {props.onPageChanged(e)}}
                    >{e}</span>
                })}
            </div>
            {
                props.users.map(user => {
                    return (
                        <div key={user.id}>
                            <span>
                                <div>
                                    <NavLink to={'/profile/' + user.id}>
                                        <img src={user.photos.small !== null ? user.photos.small : DEFAULT_AVATAR}
                                             alt="avatar" className={styles.photo}/>
                                    </NavLink>
                                </div>
                                <div>
                                    {user.followed ?
                                        <button onClick={() => {
                                            props.unfollow(user.id)
                                        }}> Unfollow </button>
                                        :
                                        <button onClick={() => {
                                            props.follow(user.id)
                                        }}> Follow </button>
                                    }
                                </div>
                            </span>
                            <span>
                                <span>
                                    <div>
                                        {user.name}
                                    </div>
                                    <div>
                                        {user.status}
                                    </div>
                                </span>
                                <span>
                                    <div>
                                        {'user.location.country'}
                                    </div>
                                    <div>
                                        {'user.location.city'}
                                    </div>
                                </span>
                            </span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Users;