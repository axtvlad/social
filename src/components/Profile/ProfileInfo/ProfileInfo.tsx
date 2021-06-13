import React, {ChangeEvent, CSSProperties, FC, useState} from 'react';
import classes from './ProfileInfo.module.css';
import undefinedAva from '../../../media/user.png'
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import {ProfileDataForm} from "./ProfileData/ProfileDataForm";
import ProfileData from "./ProfileData/ProfileData";
import {EditProfileDataForm, ProfileType} from "../../../types/types";
import {Avatar} from "antd";

type Props = {
    profile: ProfileType
    updateProfileStatus: (status: string) => void
    profileStatus: string
    isOwner: boolean
    uploadPhoto: (photo: File) => void
    saveProfileData: (formData: EditProfileDataForm) => any
}

const ProfileInfo: FC<Props> = ({profile, updateProfileStatus, profileStatus, isOwner, uploadPhoto, saveProfileData}) => {
    const [editMode, setEditMode] = useState(false);

    const onPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;

        if (files) {
            uploadPhoto(files[0]);
        }
    }

    const editModeOn = () => {
        setEditMode(true);
    }

    const saveProfile = (formData: EditProfileDataForm) => {
        // todo remove .then
        saveProfileData(formData)
            .then(() => {
                setEditMode(false);
            })
    }

    const styles = {
        descriptionBloc: {
            padding: 10
        }
    }

    return (
        <div style={styles.descriptionBloc}>
            <Avatar size={300} src={profile.photos.large || undefinedAva}/>

            {isOwner && <input type={'file'} onChange={onPhotoSelected}/>}

            {isOwner && editMode
                ? <ProfileDataForm saveProfile={saveProfile} profile={profile}/>
                : <ProfileData
                    editModeOn={editModeOn}
                    profile={profile}
                    isOwner={isOwner}
                />
            }

            <ProfileStatus profileStatus={profileStatus} updateProfileStatus={updateProfileStatus}/>
        </div>
    );
}

export default ProfileInfo;
