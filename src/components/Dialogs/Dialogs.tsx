import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, Form} from "react-final-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {composeValidators, maxLength, required} from "../../utils/validators/validators";
import {DialogType, MessageType} from "../../types/types";

type PropsType = {
    messages: Array<MessageType>
    dialogs: Array<DialogType>

    sendMessage: (messageText: string) => void
}

type FormDataType = {
    messageText: string
}

const Dialogs: React.FC<PropsType> = ({messages, sendMessage, dialogs}) => {
    const messagesList = messages.map(item =>
        <Message
            key={item.id}
            message={item.message}
        />
    );

    const dialogsList = dialogs.map(item =>
        <DialogItem
            key={item.id}
            name={item.name}
            id={item.id}
        />
    );

    const sendNewMessage = (formData: FormDataType) => {
        sendMessage(formData.messageText);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsList}
            </div>
            <div className={classes.messages}>
                {messagesList}
                <AddMessageForm onSubmit={sendNewMessage}/>
            </div>

        </div>
    )
}

type OnSubmitType = {
    onSubmit: (formData: FormDataType) => void
}

const AddMessageForm = ({onSubmit}: OnSubmitType) => {
    return (
        <Form onSubmit={onSubmit}>
            {(props) => {
                return (
                    <form onSubmit={props.handleSubmit} name={'AddMessageForm'}>
                        <div>
                            <Field
                                name={'messageText'}
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

export default Dialogs;