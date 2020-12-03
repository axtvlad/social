export const getProfileSelector = (state) => {
    return state.profilePage.profile;
}

export const getProfileStatusSelector = (state) => {
    return state.profilePage.profileStatus;
}

export const getPostsSelector = (state) => {
    return state.profilePage.posts;
}