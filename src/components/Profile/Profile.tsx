import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Preloader from "../common/Preloader/Preloader";
import {EditProfileDataForm, ProfileType} from "../../types/types";
import {MyPosts} from "./MyPosts/MyPosts";

type Props = {
    profile: ProfileType
    updateProfileStatus: (status: string) => void
    profileStatus: string
    isOwner: boolean
    uploadPhoto: (photo: File) => void
    saveProfileData: (formData: EditProfileDataForm) => void
}

const Profile: React.FC<Props> = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <>
            <ProfileInfo {...props}/>
            <MyPosts/>
        </>
    );
}

export default Profile;
