import {ResultCodesEnum} from "../../api/api"
import {PhotosType, PostType, ProfileType} from "../../types/types";
import {BaseThunkType, InferActionsTypes} from "../redux-store";
import {profileAPI} from "../../api/ProfileAPI";

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
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    isFetching: false,
    profileStatus: '',
}

export const profileReducer = (state = initial, action: ActionTypes): InitialType => {
    switch (action.type) {
        case 'SOCIAL/PROFILE/ADD_POST': {
            return {
                ...state,
                posts: [...state.posts, {
                    id: 3,
                    message: action.postText,
                    likes: 0,
                }],
            };
        }
        case 'SOCIAL/PROFILE/SET_USER_PROFILE': {
            return {
                ...state,
                profile: action.profile
            };
        }
        case 'SOCIAL/PROFILE/DELETE_POST': {
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.id)
            };
        }
        case 'SOCIAL/PROFILE/SET_IS_FETCHING': {
            return {
                ...state,
                isFetching: action.isFetching
            };
        }
        case 'SOCIAL/PROFILE/SET_PROFILE_STATUS': {
            return {
                ...state,
                profileStatus: action.profileStatus
            };
        }
        case 'SOCIAL/PROFILE/UPDATE_PHOTO_SUCCESS': {
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

export const actions = {
    addPost: (postText: string) => ({
        type: 'SOCIAL/PROFILE/ADD_POST',
        postText: postText
    } as const),
    deletePost: (id: number) => ({
        type: 'SOCIAL/PROFILE/DELETE_POST',
        id: id
    } as const),
    setUserProfile: (profile: ProfileType) => ({
        type: 'SOCIAL/PROFILE/SET_USER_PROFILE',
        profile: profile
    } as const),
    setIsFetching: (isFetching: boolean) => ({
        type: 'SOCIAL/PROFILE/SET_IS_FETCHING',
        isFetching: isFetching
    } as const),
    setProfileStatus: (profileStatus: string) => ({
        type: 'SOCIAL/PROFILE/SET_PROFILE_STATUS',
        profileStatus: profileStatus
    } as const),
    updatePhotoSuccess: (photos: PhotosType) => ({
        type: 'SOCIAL/PROFILE/UPDATE_PHOTO_SUCCESS',
        photos: photos
    } as const),
}

export const getProfile = (userId: number): ThunkType => async (dispatch) => {
    dispatch(actions.setIsFetching(true))

    if (userId) {
        const data = await profileAPI.getProfileAPI(userId);

        dispatch(actions.setUserProfile(data))
    } else {
        throw new Error('userId can not be null')
    }

    dispatch(actions.setIsFetching(false))
}

export const getProfileStatus = (userId: number): ThunkType => async (dispatch) => {
    const profileStatus = await profileAPI.getProfileStatus(userId);

    dispatch(actions.setProfileStatus(profileStatus))
}

export const updateProfileStatus = (profileStatus: string): ThunkType => async (dispatch) => {
    try {
        const response = await profileAPI.updateProfileStatus(profileStatus);

        if (response.data.resultCode === ResultCodesEnum.Success) {
            dispatch(actions.setProfileStatus(profileStatus))
        } else {
            if (response.data.messages.length) {
                alert(response.data.messages[0]);
            }
        }
    } catch (error) {
        alert(error.message)
    }
}

export const uploadPhoto = (photo: File): ThunkType => async (dispatch) => {
    const data = await profileAPI.uploadPhoto(photo);

    if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(actions.updatePhotoSuccess(data.data.photos))
    } else {
        if (data.messages.length) {
            alert(data.messages[0]);
        }
    }
}

export const saveProfileData = (profileData: ProfileType): ThunkType => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const data = await profileAPI.saveProfile(profileData);

    if (data.resultCode === ResultCodesEnum.Success) {
        if (userId) {
            await dispatch(getProfile(userId));
        } else {
            throw new Error('userId can not be null')
        }
    } else {
        if (data.messages?.length) {
            alert(data.messages[0]);
            await Promise.reject(data.messages[0]);
        }
    }
}

type InitialType = typeof initial
// type DispatchType = Dispatch<ActionTypes>
type ThunkType = BaseThunkType<ActionTypes>
type ActionTypes = InferActionsTypes<typeof actions>
