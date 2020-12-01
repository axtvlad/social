import {authAPI} from "../api/api";

const SET_AUTH_USER_DATA = 'social/auth/SET_AUTH_USER_DATA';

let initial = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    authorizedUserId: null,
}

export const authReducer = (state = initial, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA: {
            return {
                ...state,
                ...action.payload,
            }
        }
        default: {
            return state;
        }
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => (
    {
        type: SET_AUTH_USER_DATA,
        payload: {userId, email, login, isAuth},
    }
)

export const me = () => async (dispatch) => {
    let data = await authAPI.me();

    if (data.resultCode === 0) {
        let {id, email, login} = data.data;

        dispatch(setAuthUserData(id, email, login, true))
    } else {
        if (data.messages.length) {
            alert(data.messages[0]);
        } else {
            alert('unknown error');
        }
    }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe);

    if (data.resultCode === 0) {
        dispatch(me());
    } else {
        if (data.messages.length) {
            alert(data.messages[0]);
        } else {
            alert('unknown error');
        }
    }
}

export const logout = () => async (dispatch) => {
    let data = await authAPI.logout();

    if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    } else {
        if (data.messages.length) {
            alert(data.messages[0]);
        } else {
            alert('unknown error');
        }
    }
}

export default authReducer;