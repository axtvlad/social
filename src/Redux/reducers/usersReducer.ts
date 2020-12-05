import {ResultCodesEnum} from "../../api/api";
import {updateObjectInArray} from "../../utils/helpers/objectHelpers";
import {UserType} from "../../types/types";
import {BaseThunkType, InferActionsTypes} from "../redux-store";
import {Dispatch} from "redux";
import {usersAPI} from "../../api/UsersAPI";

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

export const usersReducer = (state = initial, action: ActionTypes): InitialType => {
    switch (action.type) {
        case 'SOCIAL/USERS/FOLLOW': {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
            }
        }
        case 'SOCIAL/USERS/UNFOLLOW': {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
            }
        }
        case 'SOCIAL/USERS/SET_USERS': {
            return {
                ...state,
                users: action.users
            }
        }
        case 'SOCIAL/USERS/SET_TOTAL_USERS_COUNT': {
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        }
        case 'SOCIAL/USERS/SET_CURRENT_PAGE': {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case 'SOCIAL/USERS/SET_IS_FETCHING': {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case 'SOCIAL/USERS/SET_FOLLOWING_IN_PROGRESS': {
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

export const actions = {
    followSuccess: (userId: number) => ({
        type: 'SOCIAL/USERS/FOLLOW',
        userId: userId
    } as const),
    unfollowSuccess: (userId: number) => ({
        type: 'SOCIAL/USERS/UNFOLLOW',
        userId: userId
    } as const),
    setUsers: (users: Array<UserType>) => ({
        type: 'SOCIAL/USERS/SET_USERS',
        users: users
    } as const),
    setTotalUsersCount: (totalUsersCount: number) => ({
        type: 'SOCIAL/USERS/SET_TOTAL_USERS_COUNT',
        totalUsersCount: totalUsersCount
    } as const),
    setCurrentPage: (currentPage: number) => ({
        type: 'SOCIAL/USERS/SET_CURRENT_PAGE',
        currentPage: currentPage
    } as const),
    setIsFetching: (isFetching: boolean) => ({
        type: 'SOCIAL/USERS/SET_IS_FETCHING',
        isFetching: isFetching
    } as const),
    setFollowingInProgress: (isFetching: boolean, userId: number) => ({
        type: 'SOCIAL/USERS/SET_FOLLOWING_IN_PROGRESS',
        isFetching: isFetching,
        userId: userId
    } as const),
}

const _followUnfollowFlow = async (
    dispatch: DispatchType,
    userId: number,
    apiMethod: any,
    actionCreator: (userId: number) => ActionTypes
) => {
    dispatch(actions.setFollowingInProgress(true, userId));

    const data = await apiMethod(userId);

    if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(actionCreator(userId))
    }

    dispatch(actions.setFollowingInProgress(false, userId))
}

export const getUsersList = (pageSize: number, page: number): ThunkType => async (dispatch) => {
    dispatch(actions.setIsFetching(true));
    dispatch(actions.setCurrentPage(page));

    const data = await usersAPI.getUsers(pageSize, page);

    dispatch(actions.setUsers(data.items));
    dispatch(actions.setTotalUsersCount(data.totalCount));
    dispatch(actions.setIsFetching(false))
}

export const follow = (userId: number): ThunkType => async (dispatch) => {
    await _followUnfollowFlow(dispatch, userId, usersAPI.follow, actions.followSuccess);
}

export const unfollow = (userId: number): ThunkType => async (dispatch) => {
    await _followUnfollowFlow(dispatch, userId, usersAPI.unfollow, actions.unfollowSuccess);
}

type DispatchType = Dispatch<ActionTypes>
type ThunkType = BaseThunkType<ActionTypes>
type ActionTypes = InferActionsTypes<typeof actions>
type InitialType = typeof initial
