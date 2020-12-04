import {profileAPI} from "../../api/api"
import {PhotosType, PostsType, ProfileType} from "../../types/types";

/**
 * CONSTANTS
 *
 * Constants for action creators
 */
const ADD_POST = 'social/profile/ADD_POST'
const DELETE_POST = 'social/profile/DELETE_POST'
const SET_USER_PROFILE = 'social/profile/SET_USER_PROFILE'
const SET_IS_FETCHING = 'social/profile/SET_IS_FETCHING'
const SET_PROFILE_STATUS = 'social/profile/SET_PROFILE_STATUS'
const UPDATE_PHOTO_SUCCESS = 'social/profile/UPDATE_PHOTO_SUCCESS'

/**
 * INITIAL
 *
 * posts - [] - posts array
 * profile - [default: null] - Con be (null) or (object). If profile is pended then (object) else (null)
 * isFetching - [default: false] - Con be (false) or (true). If profile is fetching then (true) else (false)
 * profileStatus - [default: ''] - Con be (empty string) or (filled string). If profile status is pended then (profileStatus) else (empty string)
 */
const initial = {
    posts: [
        {
            id: 1,
            message: 'happy ny!',
            likes: 3
        }, {
            id: 2,
            message: 'it is my first post',
            likes: 5
        },
    ] as Array<PostsType>,
    profile: null as ProfileType | null,
    isFetching: false,
    profileStatus: '',
}

type InitialType = typeof initial

export const profileReducer = (state = initial, action: any): InitialType => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, {
                    id: 3,
                    message: action.postText,
                    likes: 0,
                }],
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.id)
            };
        }
        case SET_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            };
        }
        case SET_PROFILE_STATUS: {
            return {
                ...state,
                profileStatus: action.profileStatus
            };
        }
        case UPDATE_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: {
                    ...state.profile,
                    photos: action.photos
                } as ProfileType
            }
        }
        default: {
            return state;
        }
    }
}

type AadPostActionType = {
    type: typeof ADD_POST
    postText: string
}

export const addPost = (postText: string): AadPostActionType => (
    {
        type: ADD_POST,
        postText: postText
    }
);

type DeletePostActionType = {
    type: typeof DELETE_POST
    id: number
}

export const deletePost = (id: number): DeletePostActionType => (
    {
        type: DELETE_POST,
        id: id
    }
);

type SetUserProfile = {
    type: typeof SET_USER_PROFILE,
    profile: ProfileType
}

const setUserProfile = (profile: ProfileType): SetUserProfile => (
    {
        type: SET_USER_PROFILE,
        profile: profile
    }
);

type SetIsFetching = {
    type: typeof SET_IS_FETCHING,
    isFetching: boolean
}

const setIsFetching = (isFetching: boolean): SetIsFetching => (
    {
        type: SET_IS_FETCHING,
        isFetching: isFetching
    }
);

type SetProfileStatus = {
    type: typeof SET_PROFILE_STATUS,
    profileStatus: string
}

const setProfileStatus = (profileStatus: string): SetProfileStatus => (
    {
        type: SET_PROFILE_STATUS,
        profileStatus: profileStatus
    }
);

type UpdatePhotoSuccess = {
    type: typeof UPDATE_PHOTO_SUCCESS,
    photos: PhotosType
}

const updatePhotoSuccess = (photos: PhotosType): UpdatePhotoSuccess => (
    {
        type: UPDATE_PHOTO_SUCCESS,
        photos: photos
    }
);

export const getProfile = (userId: number) => async (dispatch: any) => {
    dispatch(setIsFetching(true))

    const data = await profileAPI.getProfile(userId);

    dispatch(setUserProfile(data))
    dispatch(setIsFetching(false))
}

export const getProfileStatus = (userId: number) => async (dispatch: any) => {
    const profileStatus = await profileAPI.getProfileStatus(userId);

    dispatch(setProfileStatus(profileStatus))
}

export const updateProfileStatus = (profileStatus: string) => async (dispatch: any) => {
    try {
        const response = await profileAPI.updateProfileStatus(profileStatus);

        if (response.data.resultCode === 0) {
            dispatch(setProfileStatus(profileStatus))
        } else {
            if (response.data.messages.length) {
                alert(response.data.messages[0]);
            }
        }
    } catch (error) {
        alert(error.message)
    }
}

export const uploadPhoto = (photo: any) => async (dispatch: any) => {
    const data = await profileAPI.uploadPhoto(photo);

    if (data.resultCode === 0) {
        dispatch(updatePhotoSuccess(data.data.photos))
    } else {
        if (data.messages.length) {
            alert(data.messages[0]);
        }
    }
}

export const saveProfileData = (profileData: any) => async (dispatch: any, getState: any) => {
    const userId = getState().auth.userId;
    const data = await profileAPI.saveProfile(profileData);

    if (data.resultCode === 0) {
        dispatch(getProfile(userId));
    } else {
        if (data.messages.length) {
            alert(data.messages[0]);
            await Promise.reject(data.messages[0]);
        }
    }
}