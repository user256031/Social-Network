import React from "react";
import styles from './users.module.css'
import userPhoto from '../../asseds/images/UserImage.png';
import {NavLink} from "react-router-dom";

let User = ({user, followingInProgress, unfollow, follow}) => {
    return (
        <div className={styles.position}>
                        <span>
                                <div>
                                    <NavLink to={'/profile/' + user.id}>
                                    <img src={user.photos.small != null ? user.photos.small : userPhoto}
                                         className={styles.avatar}/>
                                        </NavLink>
                                </div>
                            <div>
                                {user.followed
                                    ? <button disabled={followingInProgress.some(id => id === user.id)}
                                              onClick={() => {
                                                  unfollow(user.id);
                                              }}>
                                        Unfollow
                                    </button>
                                    : <button disabled={followingInProgress.some(id => id === user.id)}
                                              onClick={() => {
                                                  follow(user.id);
                                              }}>
                                        Follow
                                    </button>}
                            </div>
                        </span>
            <span>
                            <span>
                                <div>{user.name}</div>
                                {/*<div>{user.status ? user.status :"status"}</div>*/}
                            </span>
                            <span>
                                <div>{"user.location.country"}</div>
                                <div>{"user.location.city"}</div>
                            </span>
                        </span>
        </div>
    )
}


export default User;