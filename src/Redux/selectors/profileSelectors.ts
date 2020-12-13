import {AppStateType} from "../redux-store";

export const selectProfile = (state: AppStateType) => {
    return state.profilePage.profile;
}

export const selectProfileStatus = (state: AppStateType) => {
    return state.profilePage.profileStatus;
}

export const selectPosts = (state: AppStateType) => {
    return state.profilePage.posts;
}