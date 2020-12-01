import {profileAPI} from "../api/api";

const ADD_POST = 'social/profile/ADD_POST';
const DELETE_POST = 'social/profile/DELETE_POST';
const SET_USER_PROFILE = 'social/profile/SET_USER_PROFILE';
const SET_IS_FETCHING = 'social/profile/SET_IS_FETCHING';
const SET_PROFILE_STATUS = 'social/profile/SET_PROFILE_STATUS';

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

export const getProfile = (userId) => async (dispatch) => {
    dispatch(setIsFetching(true))

    let data = await profileAPI.getProfile(userId);

    dispatch(setUserProfile(data))
    dispatch(setIsFetching(false))
}

export const getProfileStatus = (userId) => async (dispatch) => {
    let profileStatus = await profileAPI.getProfileStatus(userId);

    dispatch(setProfileStatus(profileStatus))
}

export const updateProfileStatus = (profileStatus) => async (dispatch) => {
    let response = await profileAPI.updateProfileStatus(profileStatus);

    if (response.data.resultCode === 0) {
        dispatch(setProfileStatus(profileStatus))
    }
}

export default profileReducer;