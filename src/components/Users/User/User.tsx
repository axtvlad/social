import React, {CSSProperties} from 'react';
import classes from "./User.module.css";
import undefinedAva from "../../../media/user.png";
import {NavLink} from "react-router-dom";
import {UserType} from "../../../types/types";

type Props = {
    unfollow: (userId: number) => void
    follow: (userId: number) => void
    followingInProgress: Array<number>
    user: UserType
}

const User: React.FC<Props> = ({unfollow, follow, followingInProgress, user}) => {
    const unfollowButton = (userId: number) => {
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

    const followButton = (userId: number) => {
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

    const {id, photos, name, status, followed} = user

    const styles = {
        userPhoto: {
            maxWidth: 50
        }
    }

    return (
        <div>
            <span>
                <div>
                    <NavLink to={'/profile/' + id}>
                        <img
                            src={photos.small ?? undefinedAva}
                            alt={'userAvatar'}
                            style={styles.userPhoto}
                        />
                    </NavLink>
                </div>
                <div>
                    {followed ? unfollowButton(id) : followButton(id)}
                </div>
            </span>
            <span>
                <span>
                    <div>{name}</div>
                    <div>{status}</div>
                </span>
                <span>
                    <div>location.country</div>
                    <div>location.city</div>
                </span>
            </span>
        </div>
    )
}

export default User;
