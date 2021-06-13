import React, {FC, useEffect, useState} from 'react'
import {Avatar} from "antd";

const ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')

export type ChatMessageType = {
    message: string
    photo: string
    userId: number
    userName: string
}

export const ChatPage: FC = () => {
    const [messages, setMessages] = useState<ChatMessageType[]>([])

    useEffect(() => {
        ws.addEventListener('message', e => {
            setMessages((prevMessages) => [...prevMessages, ...JSON.parse(e.data)])
        })
    }, [])

    const Messages: FC = () => {
        return (
            <div style={{height: 400, overflow: 'auto'}}>
                {messages.map((m: ChatMessageType) => <Message message={m} key={m.userId + Math.random()}/>)}
            </div>
        )
    }

    type MessageProps = {
        message: ChatMessageType
    }

    const Message: FC<MessageProps> = ({message}) => {
        return (
            <div>
                <Avatar src={message.photo} size={"large"}/> <b>{message.userName}</b>
                <br/>
                {message.message}
                <hr/>
            </div>
        )
    }

    return (
        <>
            <Messages/>
            <SendMessageForm/>
        </>
    )
}


const SendMessageForm: FC = () => {
    const [message, setMessage] = useState('')

    const sendMessage = () => {
        if (!message) {
            return
        } else {
            ws.send(message)

            setMessage('')
        }
    }

    return (
        <div>
            <div>
                <textarea onChange={(e) => setMessage(e.currentTarget.value)} value={message}/>
            </div>
            <div>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    )
}


