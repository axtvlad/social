import React from 'react';
import classes from './Message.module.css'

const Message = ({message}) => {
    return (
        <div className={classes.message}>
            {message}
        </div>
    )
}

export default Message;