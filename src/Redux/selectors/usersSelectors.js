import {createSelector} from "reselect";

const getUsers = (state) => {
    return state.usersPage.users;
};

export const getPageSizeSelectorSelector = (state) => {
    return state.usersPage.pageSize;
};

export const getTotalUsersCountSelector = (state) => {
    return state.usersPage.totalUsersCount;
};

export const getCurrentPageSelector = (state) => {
    return state.usersPage.currentPage;
};

export const getUsersIsFetchingSelector = (state) => {
    return state.usersPage.isFetching;
};

export const getFollowingInProgressSelector = (state) => {
    return state.usersPage.followingInProgress;
};

export const getUsersSelector = createSelector(getUsers, (users) => {
    return users.filter(u => true);
});

