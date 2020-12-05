import {Field, Form} from "react-final-form";
import {required} from "../../../../utils/validators/validators";
import React from "react";
import classes from './ProfileDataForm.module.css'
import {ProfileType} from "../../../../types/types";

type Props = {
    onSubmit: (formData: ProfileType) => void,
    profile: ProfileType
}

enum ProfileDataFormFields {
    fullName = 'fullName',
    lookingForAJob = 'lookingForAJob',
    lookingForAJobDescription = 'lookingForAJobDescription',
    aboutMe = 'aboutMe',
}

const ProfileDataForm: React.FC<Props> = ({onSubmit, profile}) => {
    const {fullName, lookingForAJob, lookingForAJobDescription, aboutMe, contacts} = profile;

    return (
        <Form onSubmit={onSubmit}>
            {(props) => {
                return (
                    <form onSubmit={props.handleSubmit} name={'ProfileDataForm'} className={classes.gridFields}>
                        <div>
                            <span className={classes.span}>Full name:</span>
                            <Field
                                name={ProfileDataFormFields.fullName}
                                placeholder={'Full name'}
                                type={'text'}
                                component={'input'}
                                validate={required}
                                initialValue={fullName}
                            />
                        </div>
                        <div className={classes.checkbox}>
                            <span className={classes.span}>Looking for a job?</span>
                            <Field
                                name={ProfileDataFormFields.lookingForAJob}
                                placeholder={'Looking for a job?'}
                                type={'checkbox'}
                                component={'input'}
                                initialValue={lookingForAJob}
                            />
                        </div>
                        <div>
                            <span className={classes.span}>My skills</span>
                            <Field
                                name={ProfileDataFormFields.lookingForAJobDescription}
                                placeholder={'My skills'}
                                component={'textarea'}
                                validate={required}
                                initialValue={lookingForAJobDescription}
                            />
                        </div>
                        <div>
                            <span className={classes.span}>About me</span>
                            <Field
                                name={ProfileDataFormFields.aboutMe}
                                placeholder={'About me'}
                                component={'textarea'}
                                validate={required}
                                initialValue={aboutMe}
                            />
                        </div>
                        <div>
                            <b>Contacts</b>:
                            {Object.keys(contacts).map(key => {
                                return (
                                    <div key={key}>
                                        <span className={classes.span}>{key}</span>
                                        <Field
                                            name={'contacts.' + key}
                                            placeholder={key}
                                            type={'text'}
                                            component={'input'}
                                            initialValue={contacts[key]}
                                        />
                                    </div>
                                )
                            })}
                        </div>
                        <div>
                            <button>Сохранить</button>
                        </div>
                    </form>
                )
            }}
        </Form>
    )
}

export default ProfileDataForm;