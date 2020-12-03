import React, {useState} from 'react';
import classes from './ProfileInfo.module.css';
import undefinedAva from '../../../media/user.png'
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import ProfileDataForm from "./ProfileData/ProfileDataForm";
import ProfileData from "./ProfileData/ProfileData";

const ProfileInfo = ({profile, updateProfileStatus, profileStatus, isOwner, uploadPhoto, saveProfileData}) => {
    const [editMode, setEditMode] = useState(false);

    const onPhotoSelected = (e) => {
        const files = e.target.files;

        if (files) {
            uploadPhoto(files[0]);
        }
    }

    const editModeOn = () => {
        setEditMode(true);
    }

    const onSubmit = (formData) => {
        saveProfileData(formData)
            .then(() => {
                setEditMode(false);
            })
    }

    return (
        <div>
            <div className={classes.descriptionBloc}>
                <img src={profile.photos.large || undefinedAva} alt="avatar" className={classes.avatar}/>

                {isOwner && <input type={'file'} onChange={onPhotoSelected}/>}

                {isOwner && editMode
                    ? <ProfileDataForm onSubmit={onSubmit} profile={profile}/>
                    : <ProfileData
                        editModeOn={editModeOn}
                        profile={profile}
                        isOwner={isOwner}
                    />
                }

                <ProfileStatus profileStatus={profileStatus} updateProfileStatus={updateProfileStatus}/>
            </div>
        </div>
    );
}

export default ProfileInfo;
