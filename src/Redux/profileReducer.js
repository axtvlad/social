import {profileAPI} from "../api/api";

const ADD_POST = 'social/profile/ADD_POST';
const DELETE_POST = 'social/profile/DELETE_POST';
const SET_USER_PROFILE = 'social/profile/SET_USER_PROFILE';
const SET_IS_FETCHING = 'social/profile/SET_IS_FETCHING';
const SET_PROFILE_STATUS = 'social/profile/SET_PROFILE_STATUS';
const UPDATE_PHOTO_SUCCESS = 'social/profile/UPDATE_PHOTO_SUCCESS';

let initial = {
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
    ],
    profile: null,
    isFetching: false,
    profileStatus: '',
}

const profileReducer = (state = initial, action) => {
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
                }
            };
        }
        default: {
            return state;
        }
    }
}

export const addPost = (postText) => (
    {
        type: ADD_POST,
        postText: postText
    }
);

export const deletePost = (id) => (
    {
        type: DELETE_POST,
        id: id
    }
);

const setUserProfile = (profile) => (
    {
        type: SET_USER_PROFILE,
        profile: profile
    }
);

const setIsFetching = (isFetching) => (
    {
        type: SET_IS_FETCHING,
        isFetching: isFetching
    }
);

const setProfileStatus = (profileStatus) => (
    {
        type: SET_PROFILE_STATUS,
        profileStatus: profileStatus
    }
);

const updatePhotoSuccess = (data) => (
    {
        type: UPDATE_PHOTO_SUCCESS,
        data: data
    }
);

export const getProfile = (userId) => async (dispatch) => {
    dispatch(setIsFetching(true))

    const data = await profileAPI.getProfile(userId);

    dispatch(setUserProfile(data))
    dispatch(setIsFetching(false))
}

export const getProfileStatus = (userId) => async (dispatch) => {
    const profileStatus = await profileAPI.getProfileStatus(userId);

    dispatch(setProfileStatus(profileStatus))
}

export const updateProfileStatus = (profileStatus) => async (dispatch) => {
    const response = await profileAPI.updateProfileStatus(profileStatus);

    if (response.data.resultCode === 0) {
        dispatch(setProfileStatus(profileStatus))
    } else {
        if (response.data.messages.length) {
            alert(response.data.messages[0]);
        } else {
            alert('unknown error');
        }
    }
}

export const uploadPhoto = (photo) => async (dispatch) => {
    const data = await profileAPI.uploadPhoto(photo);

    if (data.resultCode === 0) {
        dispatch(updatePhotoSuccess(data.data.photos))
    } else {
        if (data.messages.length) {
            alert(data.messages[0]);
        } else {
            alert('unknown error');
        }
    }
}

export const saveProfileData = (profileData) => async (dispatch, getState) => {
    const userId = getState().auth.userId;

    const data = await profileAPI.saveProfile(profileData);

    if (data.resultCode === 0) {
        dispatch(getProfile(userId));
    } else {
        if (data.messages.length) {
            alert(data.messages[0]);
        } else {
            alert('unknown error');
        }
    }
}

export default profileReducer;