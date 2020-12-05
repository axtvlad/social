import {actions, dialogsReducer} from "../reducers/dialogsReducer";
import {DialogType, MessageType} from "../../types/types";

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


it('After add new msg arr length increment', () => {
    const action = actions.sendMessage('New msg');
    const newState = dialogsReducer(initial, action);

    expect(newState.messages.length).toBe(5);
});

it('New msg is correct', () => {
    const action = actions.sendMessage('New msg');
    const newState = dialogsReducer(initial, action);

    expect(newState.messages[4].message).toBe('New msg');
});