/**
 * CONSTANTS
 *
 * Constants for action creators
 */
const SEND_MESSAGE = 'social/dialogs/SEND_MESSAGE'

type InitialType = typeof initial

type DialogsType = {
    id: number
    name: string
}

type MessagesType = {
    id: number
    message: string
}

/**
 * INITIAL
 *
 * dialogs - [default: [object]] - dialogs array
 * messages - [default: [object]] - messages array
 */
const initial = {
    dialogs: [
        {
            id: 1,
            name: 'Dima'
        }, {
            id: 2,
            name: 'Andrew'
        }
    ] as Array<DialogsType>,
    messages: [
        {
            id: 1,
            message: 'HI!'
        }, {
            id: 2,
            message: 'YO!'
        }, {
            id: 3,
            message: 'Vlad! Happy NY!!'
        }, {
            id: 4,
            message: 'Hi, how r u?'
        },
    ] as Array<MessagesType>,
}

export const dialogsReducer = (state = initial, action: any): InitialType => {
    switch (action.type) {
        case SEND_MESSAGE: {
            return {
                ...state,
                messages: [...state.messages, {
                    id: 5,
                    message: action.messageText
                }]
            }
        }
        default: {
            return state;
        }
    }
}

type SendMessageActionType = {
    type: typeof SEND_MESSAGE,
    messageText: string
}

export const sendMessage = (messageText: string): SendMessageActionType => (
    {
        type: SEND_MESSAGE,
        messageText: messageText
    }
)