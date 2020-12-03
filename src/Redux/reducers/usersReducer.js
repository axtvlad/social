import {usersAPI} from "../../api/api";
import {updateObjectInArray} from "../../utils/helpers/objectHelpers";

/**
 * CONSTANTS
 *
 * Constants for action creators
 */
const FOLLOW = 'social/users/FOLLOW';
const UNFOLLOW = 'social/users/UNFOLLOW';
const SET_USERS = 'social/users/SET_USERS';
const SET_TOTAL_USERS_COUNT = 'social/users/SET_TOTAL_USERS_COUNT';
const SET_CURRENT_PAGE = 'social/users/SET_CURRENT_PAGE';
const SET_IS_FETCHING = 'social/users/SET_IS_FETCHING';
const SET_FOLLOWING_IN_PROGRESS = 'social/users/SET_FOLLOWING_IN_PROGRESS';

/**
 * INITIAL
 *
 * @typedef initial
 * @type {object}
 * @property {[object]}     users                   [].
 * @property {number}       pageSize                [default: 5]        Con be (number). Users count per page
 * @property {number}       totalUsersCount         [default: 0]        Con be (number). Total users count in db
 * @property {number}       currentPage             [default: 1]        Con be (number). Which page is showing
 * @property {array}        followingInProgress     [default: []]       Con be (empty array) or (filled array). This array includes users which need do following or unfollowing
 * @property {boolean}      isFetching              [default: false]    Con be (true) or (false). If users is pending then (true) else (false)
 */
const initial = {
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

const followSuccess = (userId) => (
    {
        type: FOLLOW,
        userId: userId
    }
)

const unfollowSuccess = (userId) => (
    {
        type: UNFOLLOW,
        userId: userId
    }
)

const setUsers = (users) => (
    {
        type: SET_USERS,
        users: users
    }
)

const setTotalUsersCount = (totalUsersCount) => (
    {
        type: SET_TOTAL_USERS_COUNT,
        totalUsersCount: totalUsersCount
    }
)

const setCurrentPage = (currentPage) => (
    {
        type: SET_CURRENT_PAGE,
        currentPage: currentPage
    }
)

const setIsFetching = (isFetching) => (
    {
        type: SET_IS_FETCHING,
        isFetching: isFetching
    }
)

const setFollowingInProgress = (isFetching, userId) => (
    {
        type: SET_FOLLOWING_IN_PROGRESS,
        isFetching: isFetching,
        userId: userId
    }
)

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(setFollowingInProgress(true, userId));

    const data = await apiMethod(userId);

    if (data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }

    dispatch(setFollowingInProgress(false, userId))
}

export const getUsersList = (pageSize, page) => async (dispatch) => {
    dispatch(setIsFetching(true));
    dispatch(setCurrentPage(page));

    const data = await usersAPI.getUsers(pageSize, page);

    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
    dispatch(setIsFetching(false))
}

export const follow = (userId) => async (dispatch) => {
    await followUnfollowFlow(dispatch, userId, usersAPI.follow, followSuccess);
}

export const unfollow = (userId) => async (dispatch) => {
    await followUnfollowFlow(dispatch, userId, usersAPI.unfollow, unfollowSuccess);
}