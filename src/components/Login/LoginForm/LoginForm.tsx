import {LoginFormDataType} from "../../../types/types";
import React from "react";
import {Field, Form} from "react-final-form";
import {Input} from "../../common/FormsControls/FormsControls";
import {composeValidators, maxLength, required} from "../../../utils/validators/validators";

type Props = {
    onSubmit: (formData: LoginFormDataType) => void
    captchaUrl: string | null
}

enum LoginFormFields {
    email = 'email',
    password = 'password',
    rememberMe = 'rememberMe',
    captcha = 'captcha'
}

const LoginForm: React.FC<Props> = ({onSubmit, captchaUrl}) => {
    return (
        <Form onSubmit={onSubmit}>
            {(props) => {
                return (
                    <form onSubmit={props.handleSubmit} name={'LoginForm'}>
                        <div>
                            <Field
                                name={LoginFormFields.email}
                                placeholder={'Email'}
                                component={Input}
                                validate={composeValidators(required, maxLength(50))}
                            />
                        </div>
                        <div>
                            <Field
                                name={LoginFormFields.password}
                                placeholder={'Password'}
                                type={'password'}
                                component={Input}
                                validate={composeValidators(required, maxLength(50))}
                            />
                        </div>
                        <div>
                            <Field name={LoginFormFields.rememberMe} type={'checkbox'} component={Input}/> remember me
                        </div>
                        {captchaUrl &&
                        <div>
                            <img src={captchaUrl} alt="captcha"/>
                            <div>
                                <Field name={LoginFormFields.captcha} type={'text'} component={'input'}/>
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

export default LoginForm