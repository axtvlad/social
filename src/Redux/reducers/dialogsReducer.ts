import {DialogType, MessageType, SendMessageFormDataType} from "../../types/types";
import {InferActionsTypes} from "../redux-store";

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
    ] as Array<DialogType>,
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
    ] as Array<MessageType>,
}

export const dialogsReducer = (state = initial, action: ActionTypes): InitialType => {
    switch (action.type) {
        case 'SOCIAL/DIALOGS/SEND_MESSAGE': {
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

type ActionTypes = InferActionsTypes<typeof actions>

export const actions = {
    sendMessage: (formData: SendMessageFormDataType) => ({
        type: 'SOCIAL/DIALOGS/SEND_MESSAGE',
        messageText: formData.messageText
    } as const)
}

// type DispatchType = Dispatch<ActionTypes>
// type ThunkType = BaseThunkType<ActionTypes>
type InitialType = typeof initial
