import {LoginFormDataType} from "../../../types/types";
import React from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";

type Props = {
    login: (formData: LoginFormDataType) => void
    captchaUrl: string | null
}

enum LoginFormFields {
    email = 'email',
    password = 'password',
    rememberMe = 'rememberMe',
    captcha = 'captcha'
}

export const LoginForm: React.FC<Props> = React.memo(({login, captchaUrl}) => {
    const initialValuesOfForm = {
        [LoginFormFields.email]: '',
        [LoginFormFields.password]: '',
        [LoginFormFields.rememberMe]: false,
    }

    const onSubmit = (formData: LoginFormDataType, {setSubmitting}: {
        setSubmitting: (isSubmitting: boolean) => void
    }) => {
        login(formData)

        setSubmitting(false)
    }

    return (
        <Formik
            onSubmit={onSubmit}
            initialValues={initialValuesOfForm}
        >
            {({isSubmitting}) => (
                <Form>
                    <div>
                        <Field type={'text'} name={LoginFormFields.email}/>
                        <ErrorMessage name={LoginFormFields.email} component="div"/>
                    </div>

                    <div>
                        <Field type={'password'} name={LoginFormFields.password}/>
                        <ErrorMessage name={LoginFormFields.password} component="div"/>
                    </div>

                    <div>
                        <label>
                            <Field placeholder={'remember me'} type={'checkbox'}
                                   name={LoginFormFields.rememberMe}/>
                            remember me
                            <ErrorMessage name={LoginFormFields.rememberMe} component="div"/>
                        </label>
                    </div>

                    {captchaUrl &&
                    <div>
                        <img src={captchaUrl} alt="captcha"/>
                        <div>
                            <Field name={LoginFormFields.captcha} type={'text'} component={'input'}/>
                            <ErrorMessage name={LoginFormFields.captcha} component="div"/>
                        </div>
                    </div>}

                    <div>
                        <button type="submit" disabled={isSubmitting}>
                            Login
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    )
})