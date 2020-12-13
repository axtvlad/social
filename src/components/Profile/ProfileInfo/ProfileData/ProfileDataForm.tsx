import React from "react";
import classes from './ProfileDataForm.module.css'
import {EditProfileDataForm, ProfileType} from "../../../../types/types";
import {Field, Form, Formik} from "formik";

type Props = {
    saveProfile: (formData: EditProfileDataForm) => void,
    profile: ProfileType
}

enum ProfileDataFormFields {
    fullName = 'fullName',
    lookingForAJob = 'lookingForAJob',
    lookingForAJobDescription = 'lookingForAJobDescription',
    aboutMe = 'aboutMe'
}

export const ProfileDataForm: React.FC<Props> = ({saveProfile, profile}) => {
    const {fullName, lookingForAJob, lookingForAJobDescription, aboutMe, contacts} = profile;

    const initialValuesOfForm = {
        [ProfileDataFormFields.fullName]: fullName,
        [ProfileDataFormFields.lookingForAJob]: lookingForAJob,
        [ProfileDataFormFields.lookingForAJobDescription]: lookingForAJobDescription,
        [ProfileDataFormFields.aboutMe]: aboutMe,
        contacts: contacts
    }

    const onSubmit = (formData: EditProfileDataForm, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
        saveProfile(formData)

        setSubmitting(false)
    }

    return (
        <Formik
            onSubmit={onSubmit}
            initialValues={initialValuesOfForm}
        >
            {
                ({isSubmitting}) => (
                    <Form className={classes.gridFields}>
                        <div>
                            <span className={classes.span}>Full name:</span>
                            <Field
                                name={ProfileDataFormFields.fullName}
                                placeholder={'Full name'}
                                type={'text'}
                            />
                        </div>
                        <div className={classes.checkbox}>
                            <span className={classes.span}>Looking for a job?</span>
                            <Field
                                name={ProfileDataFormFields.lookingForAJob}
                                type={'checkbox'}
                            />
                        </div>
                        <div>
                            <span className={classes.span}>My skills</span>
                            <Field
                                name={ProfileDataFormFields.lookingForAJobDescription}
                                placeholder={'My skills'}
                                component={'textarea'}
                            />
                        </div>
                        <div>
                            <span className={classes.span}>About me</span>
                            <Field
                                name={ProfileDataFormFields.aboutMe}
                                placeholder={'About me'}
                                component={'textarea'}
                            />
                        </div>
                        <div>
                            <b>Contacts</b>:
                            {Object.keys(contacts).map(key => (
                                <div key={key}>
                                    <span className={classes.span}>{key}</span>
                                    <Field
                                        name={'contacts.' + key}
                                        placeholder={key}
                                        type={'text'}
                                        initialValue={contacts[key]}
                                    />
                                </div>
                            ))}
                        </div>
                        <div>
                            <button type="submit" disabled={isSubmitting}>
                                Сохранить
                            </button>
                        </div>
                    </Form>
                )
            }
        </Formik>
    )
}