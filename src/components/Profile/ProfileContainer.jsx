import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getProfileStatus, updateProfileStatus} from "../../Redux/profileReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";
import {getAuthorizedUserIdSelector, getIsAuthSelector, getUserIdSelector} from "../../Redux/authSelectors";
import {getProfileSelector, getProfileStatusSelector} from "../../Redux/profileSelectors";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let {match, currentUserId, history, getProfile, getProfileStatus} = this.props;
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
        let {profile, updateProfileStatus, profileStatus} = this.props;

        return (
            <Profile
                profile={profile}
                updateProfileStatus={updateProfileStatus}
                profileStatus={profileStatus}
            />
        );
    }
}

let mapStateToProps = (state) => {
    return {
        profile: getProfileSelector(state),
        currentUserId: getUserIdSelector(state),
        profileStatus: getProfileStatusSelector(state),
        isAuth: getIsAuthSelector(state),
        authorizedUserId: getAuthorizedUserIdSelector(state)
    }
}

export default compose(
    connect(mapStateToProps, {
        getProfile,
        getProfileStatus,
        updateProfileStatus
    }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);
