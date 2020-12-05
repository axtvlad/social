import {Field, Form} from "react-final-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {composeValidators, maxLength, required} from "../../../utils/validators/validators";
import React from "react";

type Props = {
    onSubmit: (formData: FormDataType) => void
}

type FormDataType = {
    messageText: string
}

enum AddMessageFormFields {
    messageText = 'messageText'
}

const  AddMessageForm: React.FC<Props> = ({onSubmit}) => {
    return (
        <Form onSubmit={onSubmit}>
            {(props) => {
                return (
                    <form onSubmit={props.handleSubmit} name={'AddMessageForm'}>
                        <div>
                            <Field
                                name={AddMessageFormFields.messageText}
                                component={Textarea}
                                placeholder={'Enter ur msg'}
                                validate={composeValidators(required, maxLength(100))}
                            />
                        </div>
                        <div>
                            <button>
                                Send
                            </button>
                        </div>
                    </form>
                )
            }}
        </Form>
    )
}

export default AddMessageForm
