import {usersAPI} from "../../api/api";
import {updateObjectInArray} from "../../utils/helpers/objectHelpers";
import {UserType} from "../../types/types";

/**
 * CONSTANTS
 *
 * Constants for action creators
 */
const FOLLOW = 'social/users/FOLLOW'
const UNFOLLOW = 'social/users/UNFOLLOW'
const SET_USERS = 'social/users/SET_USERS'
const SET_TOTAL_USERS_COUNT = 'social/users/SET_TOTAL_USERS_COUNT'
const SET_CURRENT_PAGE = 'social/users/SET_CURRENT_PAGE'
const SET_IS_FETCHING = 'social/users/SET_IS_FETCHING'
const SET_FOLLOWING_IN_PROGRESS = 'social/users/SET_FOLLOWING_IN_PROGRESS'

/**
 * INITIAL
 *
 * users - [default: []] - Can be (empty array) or (filled array). Array of users
 * pageSize - [default: 5] - Con be (number). Users count per page
 * totalUsersCount - [default: 0] - Con be (number). Total users count in db
 * currentPage - [default: 1] - Con be (number). Which page is showing
 * followingInProgress - [default: []] - Con be (empty array) or (filled array). This array includes users which need do following or unfollowing
 * isFetching - [default: false] - Con be (true) or (false). If users is pending then (true) else (false)
 */
const initial = {
    users: [] as Array<UserType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>, // array of user ids
}

type InitialType = typeof initial

export const usersReducer = (state = initial, action: any): InitialType => {
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

type FollowSuccessActionType = {
    type: typeof FOLLOW
    userId: number
}

const followSuccess = (userId: number): FollowSuccessActionType => (
    {
        type: FOLLOW,
        userId: userId
    }
)

type UnfollowSuccessActionType = {
    type: typeof UNFOLLOW,
    userId: number
}

const unfollowSuccess = (userId: number): UnfollowSuccessActionType => (
    {
        type: UNFOLLOW,
        userId: userId
    }
)

type SetUsersActionType = {
    type: typeof SET_USERS
    users: Array<UserType>
}

const setUsers = (users: Array<UserType>): SetUsersActionType => (
    {
        type: SET_USERS,
        users: users
    }
)

type SetTotalUsesCountActionType = {
    type: typeof SET_TOTAL_USERS_COUNT
    totalUsersCount: number
}

const setTotalUsersCount = (totalUsersCount: number): SetTotalUsesCountActionType => (
    {
        type: SET_TOTAL_USERS_COUNT,
        totalUsersCount: totalUsersCount
    }
)

type SetCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}

const setCurrentPage = (currentPage: number): SetCurrentPageActionType => (
    {
        type: SET_CURRENT_PAGE,
        currentPage: currentPage
    }
)

type SetIsFetchingActionType = {
    type: typeof SET_IS_FETCHING
    isFetching: boolean
}

const setIsFetching = (isFetching: boolean): SetIsFetchingActionType => (
    {
        type: SET_IS_FETCHING,
        isFetching: isFetching
    }
)

type SetFollowingInProgressActionType = {
    type: typeof SET_FOLLOWING_IN_PROGRESS
    isFetching: boolean
    userId: number
}

const setFollowingInProgress = (isFetching: boolean, userId: number): SetFollowingInProgressActionType => (
    {
        type: SET_FOLLOWING_IN_PROGRESS,
        isFetching: isFetching,
        userId: userId
    }
)

const followUnfollowFlow = async (dispatch: any, userId: number, apiMethod: any, actionCreator: any) => {
    dispatch(setFollowingInProgress(true, userId));

    const data = await apiMethod(userId);

    if (data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }

    dispatch(setFollowingInProgress(false, userId))
}

export const getUsersList = (pageSize: number, page: number) => async (dispatch: any) => {
    dispatch(setIsFetching(true));
    dispatch(setCurrentPage(page));

    const data = await usersAPI.getUsers(pageSize, page);

    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
    dispatch(setIsFetching(false))
}

export const follow = (userId: number) => async (dispatch: any) => {
    await followUnfollowFlow(dispatch, userId, usersAPI.follow, followSuccess);
}

export const unfollow = (userId: number) => async (dispatch: any) => {
    await followUnfollowFlow(dispatch, userId, usersAPI.unfollow, unfollowSuccess);
}