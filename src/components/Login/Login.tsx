import React from 'react';
import {connect} from "react-redux";
import {login} from "../../Redux/reducers/authReducer";
import {Redirect} from "react-router-dom";
import {getIsAuthSelector} from "../../Redux/selectors/authSelectors";
import {AppStateType} from "../../Redux/redux-store";
import {LoginFormDataType} from "../../types/types";
import LoginForm from "./LoginForm/LoginForm";

type StateToProps = {
    isAuth: boolean
    captchaUrl: string | null
}

type DispatchToProps = {
    login: (formData: LoginFormDataType) => void
}

type Props = StateToProps & DispatchToProps

const Login: React.FC<Props> = ({login, isAuth, captchaUrl}) => {
    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <LoginForm login={login} captchaUrl={captchaUrl}/>
        </div>
    )
}

const mapStateToProps = (state: AppStateType): StateToProps => {
    return {
        isAuth: getIsAuthSelector(state),
        captchaUrl: state.auth.captchaUrl
    }
}

export default connect<StateToProps, DispatchToProps, {}, AppStateType>(
    mapStateToProps, {
        login
    }
)(Login);