import React from 'react';
import classes from './Post.module.css';
import undefinedAva from "../../../../media/user.png";
import {ProfileType} from "../../../../types/types";

type Props = {
    profile: ProfileType | null
    message: string
    likes: number
}

const Post: React.FC<Props> = ({profile, message, likes}) => {
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
