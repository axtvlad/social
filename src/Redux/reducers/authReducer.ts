import {ResultCodeForCaptchaEnum, ResultCodesEnum} from "../../api/api"
import {LoginFormDataType} from "../../types/types";
import {BaseThunkType, InferActionsTypes} from "../redux-store";
import {securityAPI} from "../../api/SecurityAPI";
import {authAPI} from "../../api/AuthAPI";

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
export const authReducer = (state = initial, action: ActionTypes): InitialType => {
    switch (action.type) {
        case 'SOCIAL/AUTH/SET_AUTH_USER_DATA': {
            return {
                ...state,
                ...action.payload,
            }
        }
        case 'SOCIAL/AUTH/GET_CAPTCHA_URL_SUCCESS': {
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

export const actions = {
    setAuthUserData: (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
        type: 'SOCIAL/AUTH/SET_AUTH_USER_DATA',
        payload: {userId, email, login, isAuth},
    } as const),
    getCaptchaUrlSuccess: (captchaUrl: string | null) => ({
        type: 'SOCIAL/AUTH/GET_CAPTCHA_URL_SUCCESS',
        captchaUrl: captchaUrl
    } as const),
}

export const me = (): ThunkType => async (dispatch) => {
    const data = await authAPI.me();

    if (data.resultCode === ResultCodesEnum.Success) {
        const {id, email, login} = data.data;

        dispatch(actions.setAuthUserData(id, email, login, true))
    }
}

export const login = (formData: LoginFormDataType): ThunkType => async (dispatch) => {
    const data = await authAPI.login(formData);

    if (data.resultCode === ResultCodesEnum.Success) {
        await dispatch(me());
        dispatch(actions.getCaptchaUrlSuccess(null));
    } else {
        if (data.resultCode === ResultCodeForCaptchaEnum.CaptchaIsRequired) {
            await dispatch(getCaptcha());
        }

        if (data.messages?.length) {
            alert(data.messages[0]);
        }
    }
}

export const getCaptcha = (): ThunkType => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;

    dispatch(actions.getCaptchaUrlSuccess(captchaUrl))
}

// если ограничиваем только нашими actions, то тогда ThunkType, иначе - BaseThunk
export const logout = (): ThunkType => async (dispatch) => {
    const data = await authAPI.logout();

    if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(actions.setAuthUserData(null, null, null, false));
    } else {
        if (data.messages?.length) {
            alert(data.messages[0]);
        }
    }
}

// type DispatchType = Dispatch<ActionTypes>
type ThunkType = BaseThunkType<ActionTypes> // | FormAction> from redux-forms. Если ограничиваем только нашими actions
type ActionTypes = InferActionsTypes<typeof actions>
