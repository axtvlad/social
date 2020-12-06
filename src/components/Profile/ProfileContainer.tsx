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
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {getIsAuthSelector, getUserIdSelector} from "../../Redux/selectors/authSelectors";
import {getProfileSelector, getProfileStatusSelector} from "../../Redux/selectors/profileSelectors";
import {ProfileType} from "../../types/types";
import {AppStateType} from "../../Redux/redux-store";
import Preloader from "../common/Preloader/Preloader";

type StateToProps = {
    currentUserId: number | null
    profileStatus: string
    profile: ProfileType | null
    isAuth: boolean
}

type DispatchToProps = {
    getProfile: (userId: number) => void
    getProfileStatus: (userId: number) => void
    updateProfileStatus: (status: string) => void
    uploadPhoto: () => void
    saveProfileData: () => void
}

type PathParams = {
    userId: string
}
type RouterMatch = RouteComponentProps<PathParams>

type Props = StateToProps & DispatchToProps & RouterMatch

class ProfileContainer extends React.Component<Props> {
    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Props, prevState: StateToProps) {
        const {match} = this.props;

        if (match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    refreshProfile = () => {
        const {match, currentUserId, getProfile, getProfileStatus} = this.props;

        // псевдоистина - в данном случае userId: string, если поставить перед значением +, то конвертирует в число
        // например: а='1';  +a // 1
        let userId: number | null = +match.params.userId;

        if (!userId) {
            userId = currentUserId;

            if (!userId) {
                return <Redirect to={'/login'}/>
            }
        }

        getProfile(userId);
        getProfileStatus(userId);
    }

    render() {
        const {profile, updateProfileStatus, profileStatus, match, uploadPhoto, saveProfileData} = this.props;

        if (!profile) {
            return <Preloader/>
        }

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

const mapStateToProps = (state: AppStateType): StateToProps => {
    return {
        profile: getProfileSelector(state),
        currentUserId: getUserIdSelector(state),
        profileStatus: getProfileStatusSelector(state),
        isAuth: getIsAuthSelector(state),
    }
}

export default compose<React.ComponentType>(
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
