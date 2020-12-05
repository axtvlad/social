import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogType, MessageType} from "../../types/types";
import AddMessageForm from "./AddMessageForm/AddMessageForm";

type Props = {
    messages: Array<MessageType>
    dialogs: Array<DialogType>

    sendMessage: (messageText: string) => void
}

type FormDataType = {
    messageText: string
}

const Dialogs: React.FC<Props> = ({messages, sendMessage, dialogs}) => {
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

export default Dialogs;