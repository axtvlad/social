import React from 'react';
import classes from './Post.module.css';
import undefinedAva from "../../../../media/user.png";

const Post = ({profile, message, likes}) => {
    const getUserAvatar = () => {
        if (profile && profile.photos.small) {
            return profile.photos.small;
        } else {
            return undefinedAva;
        }
    };

    return (
        <div className={classes.posts}>
            <div className={classes.item}>
                <img className={classes.ava} src={getUserAvatar()} alt={'ava'}/>
                {message}
            </div>
            <div>
                <span>
                    like {likes}
                </span>
            </div>
        </div>
    );
}

export default Post;
