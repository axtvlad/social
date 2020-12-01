import React from 'react';
import {Field, Form} from 'react-final-form'
import {Input} from "../common/FormsControls/FormsControls";
import {composeValidators, maxLength, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../Redux/authReducer";
import {Redirect} from "react-router-dom";
import {getIsAuthSelector} from "../../Redux/authSelectors";

const LoginForm = ({onSubmit}) => {
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
                        <div>
                            <button>Login</button>
                        </div>
                    </form>
                )
            }}
        </Form>
    )
}

const Login = ({login, isAuth,}) => {
    const onSubmit = (formData) => {
        login(formData.email, formData.password, formData.rememberMe)
    }

    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <LoginForm onSubmit={onSubmit}/>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        isAuth: getIsAuthSelector(state)
    }
}

export default connect(mapStateToProps, {
    login
})(Login);