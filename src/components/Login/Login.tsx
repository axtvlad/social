import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../Redux/reducers/authReducer";
import {Redirect} from "react-router-dom";
import {selectCaptchaUrl, selectIsAuth} from "../../Redux/selectors/authSelectors";
import {LoginFormDataType} from "../../types/types";
import LoginForm from "./LoginForm/LoginForm";

export const LoginPage: React.FC = (props) => {
    const captchaUrl = useSelector(selectCaptchaUrl)
    const isAuth = useSelector(selectIsAuth)

    const dispatch = useDispatch()

    const onLogin = (formData: LoginFormDataType) => {
        dispatch(login(formData))
    }

    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <LoginForm login={onLogin} captchaUrl={captchaUrl}/>
        </div>
    )
}