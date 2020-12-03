import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getProfile,
    getProfileStatus,
    saveProfileData,
    updateProfileStatus,
    uploadPhoto
} from "../../Redux/reducers/profileReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";
import {getIsAuthSelector, getUserIdSelector} from "../../Redux/selectors/authSelectors";
import {getProfileSelector, getProfileStatusSelector} from "../../Redux/selectors/profileSelectors";

class ProfileContainer extends React.Component {
    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {match} = this.props;

        if (match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    refreshProfile = () => {
        const {match, currentUserId, history, getProfile, getProfileStatus} = this.props;

        let userId = match.params.userId;

        if (!userId) {
            userId = currentUserId;

            if (!userId) {
                history.push('/profile');
            }
        }

        getProfile(userId);
        getProfileStatus(userId);
    }

    render() {
        const {profile, updateProfileStatus, profileStatus, match, uploadPhoto, saveProfileData} = this.props;

        return (
            <Profile
                isOwner={!match.params.userId}
                profile={profile}
                updateProfileStatus={updateProfileStatus}
                profileStatus={profileStatus}
                uploadPhoto={uploadPhoto}
                saveProfileData={saveProfileData}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        profile: getProfileSelector(state),
        currentUserId: getUserIdSelector(state),
        profileStatus: getProfileStatusSelector(state),
        isAuth: getIsAuthSelector(state),
    }
}

export default compose(
    connect(mapStateToProps, {
        getProfile,
        getProfileStatus,
        updateProfileStatus,
        uploadPhoto,
        saveProfileData
    }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);
