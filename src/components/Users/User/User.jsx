import React from 'react';
import classes from "./User.module.css";
import undefinedAva from "../../../media/user.png";
import {NavLink} from "react-router-dom";

const User = ({unfollow, follow, followingInProgress, user}) => {
    const unfollowButton = (userId) => {
        return (
            <button
                onClick={() => {
                    unfollow(userId)
                }}
                disabled={followingInProgress.some(id => id === userId)}
            >
                Unfollow
            </button>
        )
    }

    const followButton = (userId) => {
        return (
            <button
                onClick={() => {
                    follow(userId)
                }}
                disabled={followingInProgress.some(id => id === userId)}
            >
                Follow
            </button>
        )
    }

    return (
        <div>
            <span>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img
                            src={!user.photos.small ? undefinedAva : user.photos.small}
                            alt='userAvatar'
                            className={classes.userPhoto}
                        />
                    </NavLink>
                </div>
                <div>
                    {user.followed ? unfollowButton(user.id) : followButton(user.id)}
                </div>
            </span>
            <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>user.location.country</div>
                    <div>user.location.city</div>
                </span>
            </span>
        </div>
    )
}

export default User;