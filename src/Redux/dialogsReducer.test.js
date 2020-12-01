import dialogsReducer, {sendMessage} from "./dialogsReducer";

let initial = {
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

it('After add new msg arr length increment ', () => {
    let action = sendMessage('New msg');
    let newState = dialogsReducer(initial, action);

    expect(newState.messages.length).toBe(5);
});

it('New msg is correct ', () => {
    let action = sendMessage('New msg');
    let newState = dialogsReducer(initial, action);

    expect(newState.messages[4].message).toBe('New msg');
});