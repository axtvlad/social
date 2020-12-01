import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/helpers/objectHelpers";

const FOLLOW = 'social/users/FOLLOW';
const UNFOLLOW = 'social/users/UNFOLLOW';
const SET_USERS = 'social/users/SET_USERS';
const SET_TOTAL_USERS_COUNT = 'social/users/SET_TOTAL_USERS_COUNT';
const SET_CURRENT_PAGE = 'social/users/SET_CURRENT_PAGE';
const SET_IS_FETCHING = 'social/users/SET_IS_FETCHING';
const SET_FOLLOWING_IN_PROGRESS = 'social/users/SET_FOLLOWING_IN_PROGRESS';

let initial = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
}

export const usersReducer = (state = initial, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: action.users
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case SET_FOLLOWING_IN_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default: {
            return state;
        }
    }
}

export const followSuccess = (userId) => (
    {
        type: FOLLOW,
        userId: userId
    }
)

export const unfollowSuccess = (userId) => (
    {
        type: UNFOLLOW,
        userId: userId
    }
)

export const setUsers = (users) => (
    {
        type: SET_USERS,
        users: users
    }
)

export const setTotalUsersCount = (totalUsersCount) => (
    {
        type: SET_TOTAL_USERS_COUNT,
        totalUsersCount: totalUsersCount
    }
)

export const setCurrentPage = (currentPage) => (
    {
        type: SET_CURRENT_PAGE,
        currentPage: currentPage
    }
)

export const setIsFetching = (isFetching) => (
    {
        type: SET_IS_FETCHING,
        isFetching: isFetching
    }
)

export const setFollowingInProgress = (isFetching, userId) => (
    {
        type: SET_FOLLOWING_IN_PROGRESS,
        isFetching: isFetching,
        userId: userId
    }
)

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(setFollowingInProgress(true, userId));

    let data = await apiMethod(userId);

    if (data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }

    dispatch(setFollowingInProgress(false, userId))
}

export const getUsersList = (pageSize, page) => async (dispatch) => {
    dispatch(setIsFetching(true));
    dispatch(setCurrentPage(page));

    let data = await usersAPI.getUsers(pageSize, page);

    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
    dispatch(setIsFetching(false))
}

export const follow = (userId) => async (dispatch) => {
    followUnfollowFlow(dispatch, userId, usersAPI.follow, followSuccess);
}

export const unfollow = (userId) => async (dispatch) => {
    followUnfollowFlow(dispatch, userId, usersAPI.unfollow, unfollowSuccess);
}

export default usersReducer;