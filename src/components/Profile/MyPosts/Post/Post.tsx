import React from 'react';
import undefinedAva from "../../../../media/user.png";
import {ProfileType} from "../../../../types/types";

type Props = {
    profile: ProfileType | null
    message: string
    likes: number
}

export const Post: React.FC<Props> = ({profile, message, likes}) => {
    const styles = {
        item: {
            color: 'black'
        },
        posts: {
            color: 'green'
        },
        ava: {
            width: 30,
            height: 30,
            borderRadius: 40
        }
    }

    const getUserAvatar = () => {
        return profile?.photos.small ?? undefinedAva
    };

    return (
        <div style={styles.posts}>
            <div style={styles.item}>
                <img style={styles.ava} src={getUserAvatar()} alt={'ava'}/>
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