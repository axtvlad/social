import {AppStateType} from "../redux-store";

export const getIsAuthSelector = (state: AppStateType): boolean => {
    return state.auth.isAuth;
}

export const getLoginSelector = (state: AppStateType): string | null => {
    return state.auth.login;
}

export const getUserIdSelector = (state: AppStateType): number | null => {
    return state.auth.userId;
}