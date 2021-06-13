import React from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {SendMessageFormDataType} from "../../../types/types";

type Props = {
    sendMessage: (messageText: SendMessageFormDataType) => void
}

enum AddMessageFormFields {
    messageText = 'messageText'
}

export const AddMessageForm: React.FC<Props> = React.memo(({sendMessage}) => {
    const initialValuesOfForm = {
        [AddMessageFormFields.messageText]: ''
    }

    const onSubmit = (formData: SendMessageFormDataType, {setSubmitting}: {
        setSubmitting: (isSubmitting: boolean) => void
    }) => {
        sendMessage(formData)

        setSubmitting(false)
    }

    return (
        <Formik
            onSubmit={onSubmit}
            initialValues={initialValuesOfForm}
        >
            {({isSubmitting}) => (
                <Form>
                    <Field component={'textarea'} name={AddMessageFormFields.messageText}/>
                    <ErrorMessage name={AddMessageFormFields.messageText} component="div"/>

                    <div>
                        <button type="submit" disabled={isSubmitting}>
                            Send
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    )
})
