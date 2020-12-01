import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, Form} from "react-final-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {composeValidators, maxLength, required} from "../../utils/validators/validators";

const AddMessageForm = ({onSubmit}) => {
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

const Dialogs = ({messages, sendMessage, dialogs}) => {
    let messagesList = messages.map(item =>
        <Message
            key={item.id}
            message={item.message}
            id={item.id}
        />
    );

    let dialogsList = dialogs.map(item =>
        <DialogItem
            key={item.id}
            name={item.name}
            id={item.id}
        />
    );

    const sendNewMessage = (values) => {
        sendMessage(values.messageText);
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

export default Dialogs;