import React from "react";
import {Field, Form} from "react-final-form";
import {Textarea} from "../../../common/FormsControls/FormsControls";
import {composeValidators, maxLength, required} from "../../../../utils/validators/validators";

type Props = {
    onSubmit: (formData: AddPostFormType) => void
}

type AddPostFormType = {
    postText: string
}

enum AddPostFormFields {
    postText = 'postText'
}

const AddPostForm: React.FC<Props> = ({onSubmit}) => {
    return (
        <Form onSubmit={onSubmit}>
            {(props) => {
                return (
                    <form onSubmit={props.handleSubmit} name={'AddPostForm'}>
                        <div>
                            <Field
                                component={Textarea}
                                name={AddPostFormFields.postText}
                                validate={composeValidators(required, maxLength(300))}
                                placeholder={'post msg'}
                            />
                        </div>
                        <div>
                            <button>
                                Add post
                            </button>
                        </div>
                    </form>
                )
            }}
        </Form>
    )
}

export default AddPostForm