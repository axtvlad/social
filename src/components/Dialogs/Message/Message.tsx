import React from 'react';
import classes from './Message.module.css'

type Props = {
    message: string
}

const Message: React.FC<Props> = ({message}) => {
    return (
        <div className={classes.message}>
            {message}
        </div>
    )
}

export default Message;