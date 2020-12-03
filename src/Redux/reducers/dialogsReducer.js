/**
 * CONSTANTS
 *
 * Constants for action creators
 */
const SEND_MESSAGE = 'social/dialogs/SEND_MESSAGE';

/**
 * INITIAL
 *
 * @typedef initial
 * @type {object}
 * @property {[object]}     dialogs     [default: [object]]
 * @property {[object]}     messages    [default: [object]]
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
    ],
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
    ],
}

export const dialogsReducer = (state = initial, action) => {
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

export const sendMessage = (messageText) => (
    {
        type: SEND_MESSAGE,
        messageText: messageText
    }
)