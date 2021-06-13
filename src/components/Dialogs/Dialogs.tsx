import React from 'react';
import classes from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogType, MessageType, SendMessageFormDataType} from "../../types/types";
import {AddMessageForm} from "./AddMessageForm/AddMessageForm";

type Props = {
    messages: Array<MessageType>
    dialogs: Array<DialogType>

    sendMessage: (messageText: SendMessageFormDataType) => void
}

export const Dialogs: React.FC<Props> = ({messages, sendMessage, dialogs}) => {
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

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsList}
            </div>
            <div className={classes.messages}>
                {messagesList}
                <AddMessageForm sendMessage={sendMessage}/>
            </div>
        </div>
    )
}