import {AppStateType} from "../redux-store";
import {PostType, ProfileType} from "../../types/types";

export const getProfileSelector = (state: AppStateType): ProfileType | null => {
    return state.profilePage.profile;
}

export const getProfileStatusSelector = (state: AppStateType): string => {
    return state.profilePage.profileStatus;
}

export const getPostsSelector = (state: AppStateType): Array<PostType> => {
    return state.profilePage.posts;
}