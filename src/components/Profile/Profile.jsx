import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = ({profile, profileStatus, updateProfileStatus}) => {
    return (
        <div>
            <ProfileInfo
                profile={profile}
                profileStatus={profileStatus}
                updateProfileStatus={updateProfileStatus}
            />
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;
