import React, {CSSProperties} from "react";
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

    const styles = {
        span: {
            fontWeight: 'bold'
        } as CSSProperties,
        grids: {
            display: "grid",
            width: 200
        },
        lookingForAJob: {
            display: "flex"
        }
    }

    return (
        <Formik
            onSubmit={onSubmit}
            initialValues={initialValuesOfForm}
        >
            {
                ({isSubmitting}) => (
                    <Form style={styles.grids}>
                        <div>
                            <span style={styles.span}>Full name:</span>
                            <Field
                                name={ProfileDataFormFields.fullName}
                                placeholder={'Full name'}
                                type={'text'}
                            />
                        </div>
                        <div>
                            <span style={styles.span}>Looking for a job?</span>
                            <Field
                                style={styles.lookingForAJob}
                                name={ProfileDataFormFields.lookingForAJob}
                                type={'checkbox'}
                            />
                        </div>
                        <div>
                            <span style={styles.span}>My skills</span>
                            <Field
                                name={ProfileDataFormFields.lookingForAJobDescription}
                                placeholder={'My skills'}
                                component={'textarea'}
                            />
                        </div>
                        <div>
                            <span style={styles.span}>About me</span>
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
                                    <span style={styles.span}>{key}</span>
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
