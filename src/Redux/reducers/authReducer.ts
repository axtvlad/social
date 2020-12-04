import {authAPI, securityAPI} from "../../api/api"

/**
 * CONSTANTS
 *
 * Constants for action creators
 */
const SET_AUTH_USER_DATA = 'social/auth/SET_AUTH_USER_DATA'
const GET_CAPTCHA_URL_SUCCESS = 'social/auth/GET_CAPTCHA_URL_SUCCESS'

type InitialType = typeof initial

/**
 * INITIAL
 *
 * isAuth - [default: false] - Can be (true) or (false). If user is not authorized then (false) else (true)
 * captchaUrl - [default: null] - Con be (null) or (string). If captcha is not required then (null) else (string)
 * login - [default: null] - Con be (null) or (string). If user is not authorized then (null) else (string)
 * userId - [default: null] - Con be (null) or (string). If user is not authorized then (null) else (string)
 * email - [default: null] - Con be (null) or (string). If user is not authorized then (null) else (string)
 */
const initial = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null
}

/**
 * AUTH REDUCER
 *
 * Reducer takes a current (state) from store and (action) which action creator send him
 *
 * state - [default: initial] - Includes current state
 * action - [] - Includes action (type) and data
 *
 * return new State copy
 */
export const authReducer = (state = initial, action: any): InitialType => {
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

type SetAuthUserDataActionPayloadType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

type SetAuthUserDataActionType = {
    type: typeof SET_AUTH_USER_DATA
    payload: SetAuthUserDataActionPayloadType
}

const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): SetAuthUserDataActionType => (
    {
        type: SET_AUTH_USER_DATA,
        payload: {userId, email, login, isAuth},
    }
)

type GetCaptchaUrlSuccessActionType = {
    type: typeof GET_CAPTCHA_URL_SUCCESS
    captchaUrl: string | null
}

const getCaptchaUrlSuccess = (captchaUrl: string | null): GetCaptchaUrlSuccessActionType => (
    {
        type: GET_CAPTCHA_URL_SUCCESS,
        captchaUrl: captchaUrl
    }
)

export const me = () => async (dispatch: any) => {
    const data = await authAPI.me();

    if (data.resultCode === 0) {
        const {id, email, login} = data.data;

        dispatch(setAuthUserData(id, email, login, true))
    }
}

type LoginFormDataType = {
    email: string
    password: string,
    captcha: string
}

export const login = (formData: LoginFormDataType) => async (dispatch: any) => {
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

export const getCaptcha = () => async (dispatch: any) => {
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;

    dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export const logout = () => async (dispatch: any) => {
    const data = await authAPI.logout();

    if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    } else {
        if (data.messages.length) {
            alert(data.messages[0]);
        }
    }
}