import React from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {AddPostFormDataType} from "../../../../types/types";

type Props = {
    addPost: (formData: AddPostFormDataType) => void
}

enum AddPostFormFields {
    postText = 'postText'
}

const AddPostForm: React.FC<Props> = React.memo(({addPost}) => {
    const initialValuesOfForm = {
        [AddPostFormFields.postText]: ''
    }

    const onSubmit = (formData: AddPostFormDataType, {setSubmitting}: {
        setSubmitting: (isSubmitting: boolean) => void
    }) => {
        addPost(formData)

        setSubmitting(false)
    }

    return (
        <Formik
            onSubmit={onSubmit}
            initialValues={initialValuesOfForm}
        >
            {
                ({isSubmitting}) => (
                    <Form>
                        <Field component={'textarea'} name={AddPostFormFields.postText}/>
                        <ErrorMessage name={AddPostFormFields.postText} component="div"/>

                        <div>
                            <button type="submit" disabled={isSubmitting}>
                                Add post
                            </button>
                        </div>
                    </Form>
                )
            }
        </Formik>
    )
})

export default AddPostForm