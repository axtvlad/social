import {authAPI, securityAPI} from "../../api/api";

/**
 * CONSTANTS
 *
 * Constants for action creators
 */
const SET_AUTH_USER_DATA = 'social/auth/SET_AUTH_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'social/auth/GET_CAPTCHA_URL_SUCCESS';

/**
 * INITIAL
 *
 * @typedef initial
 * @type {object}
 *
 * @property {boolean}      isAuth      [default: false]    Can be (true) or (false). If user is not authorized then (false) else (true)
 * @property {null}         captchaUrl  [default: null]     Con be (null) or (string). If captcha is not required then (null) else (string)
 * @property {null}         login       [default: null]     Con be (null) or (string). If user is not authorized then (null) else (string)
 * @property {null}         userId      [default: null]     Con be (null) or (string). If user is not authorized then (null) else (string)
 * @property {null}         email       [default: null]     Con be (null) or (string). If user is not authorized then (null) else (string)
 */
const initial = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
}

/**
 * AUTH REDUCER
 *
 * Reducer takes a current (state) from store and (action) which action creator send him
 *
 * @param {object}      state     [default: initial]     Includes current state
 * @param {object}      action    []                     Includes action (type) and data
 *
 * @returns {{isAuth, captchaUrl, login, userId, email}}
 */
export const authReducer = (state = initial, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA: {
            return {
                ...state,
                ...action.payload,
            }
        }
        case GET_CAPTCHA_URL_SUCCESS: {
            return {
                ...state,
                captchaUrl: action.captchaUrl
            }
        }
        default: {
            return state;
        }
    }
}

const setAuthUserData = (userId, email, login, isAuth) => (
    {
        type: SET_AUTH_USER_DATA,
        payload: {userId, email, login, isAuth},
    }
)

const getCaptchaUrlSuccess = (captchaUrl) => (
    {
        type: GET_CAPTCHA_URL_SUCCESS,
        captchaUrl: captchaUrl
    }
)

export const me = () => async (dispatch) => {
    const data = await authAPI.me();

    if (data.resultCode === 0) {
        const {id, email, login} = data.data;

        dispatch(setAuthUserData(id, email, login, true))
    }
}

export const login = (formData) => async (dispatch) => {
    const data = await authAPI.login(formData);

    if (data.resultCode === 0) {
        dispatch(me());
        dispatch(getCaptchaUrlSuccess(null));
    } else {
        if (data.resultCode === 10) {
            dispatch(getCaptcha());
        }

        if (data.messages.length) {
            alert(data.messages[0]);
        }
    }
}

export const getCaptcha = () => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;

    dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export const logout = () => async (dispatch) => {
    const data = await authAPI.logout();

    if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    } else {
        if (data.messages.length) {
            alert(data.messages[0]);
        }
    }
}