import React from 'react';
import {Field, Form} from 'react-final-form'
import {Input} from "../common/FormsControls/FormsControls";
import {composeValidators, maxLength, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../Redux/reducers/authReducer";
import {Redirect} from "react-router-dom";
import {getIsAuthSelector} from "../../Redux/selectors/authSelectors";
import {AppStateType} from "../../Redux/redux-store";
import {LoginFormDataType} from "../../types/types";

type MapStateToPropsType = {
    isAuth: boolean
    captchaUrl: string | null
}

type MapDispatchToPropsType = {
    login: (formData: LoginFormDataType) => void
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType

const Login: React.FC<PropsType> = ({login, isAuth, captchaUrl}) => {
    const onSubmit = (formData: LoginFormDataType) => {
        login(formData)
    }

    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <LoginForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
        </div>
    )
}

type LoginFormPropsType = {
    onSubmit: (formData: LoginFormDataType) => void
    captchaUrl: string | null
}

const LoginForm: React.FC<LoginFormPropsType> = ({onSubmit, captchaUrl}) => {
    return (
        <Form onSubmit={onSubmit}>
            {(props) => {
                return (
                    <form onSubmit={props.handleSubmit} name={'LoginForm'}>
                        <div>
                            <Field
                                name={'email'}
                                placeholder={'Email'}
                                component={Input}
                                validate={composeValidators(required, maxLength(50))}
                            />
                        </div>
                        <div>
                            <Field
                                name={'password'}
                                placeholder={'Password'}
                                type={'password'}
                                component={Input}
                                validate={composeValidators(required, maxLength(50))}
                            />
                        </div>
                        <div>
                            <Field name={'rememberMe'} type={'checkbox'} component={Input}/> remember me
                        </div>
                        {captchaUrl &&
                        <div>
                            <img src={captchaUrl} alt="captcha"/>
                            <div>
                                <Field name={'captcha'} type={'text'} component={'input'}/>
                            </div>
                        </div>
                        }
                        <div>
                            <button>Login</button>
                        </div>
                    </form>
                )
            }}
        </Form>
    )
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: getIsAuthSelector(state),
        captchaUrl: state.auth.captchaUrl
    }
}

export default connect<MapStateToPropsType, MapDispatchToPropsType, null, AppStateType>(mapStateToProps, {
    login
})(Login);