import {AppStateType} from "../redux-store";

export const getProfileSelector = (state: AppStateType) => {
    return state.profilePage.profile;
}

export const getProfileStatusSelector = (state: AppStateType) => {
    return state.profilePage.profileStatus;
}

export const getPostsSelector = (state: AppStateType) => {
    return state.profilePage.posts;
}