export const getIsAuthSelector = (state) => {
    return state.auth.isAuth;
}

export const getLoginSelector = (state) => {
    return state.auth.login;
}

export const getUserIdSelector = (state) => {
    return state.auth.userId;
}