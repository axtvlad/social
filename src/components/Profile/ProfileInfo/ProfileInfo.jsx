import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import undefinedAva from '../../../media/user.png'
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = ({profile, updateProfileStatus, profileStatus}) => {
    if (!profile) {
        return (
            <Preloader/>
        )
    }

    const getUserAvatar = () => {
        if (profile.photos.large) {
            return profile.photos.large;
        } else {
            return undefinedAva;
        }
    };

    return (
        <div>
            <div className={classes.descriptionBloc}>
                <img src={getUserAvatar()} alt="avatar" className={classes.avatar}/>
                <ProfileStatus profileStatus={profileStatus} updateProfileStatus={updateProfileStatus}/>
            </div>
        </div>
    );
}

export default ProfileInfo;
