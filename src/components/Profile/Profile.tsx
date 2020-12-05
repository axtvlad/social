import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../common/Preloader/Preloader";
import {ProfileType} from "../../types/types";

type Props = {
    profile: ProfileType
    updateProfileStatus: (status: string) => void
    profileStatus: string
    isOwner: boolean
    uploadPhoto: () => void
    saveProfileData: () => void
}

const Profile: React.FC<Props> = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <ProfileInfo {...props}/>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;
