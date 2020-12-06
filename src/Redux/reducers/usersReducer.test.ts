import {actions, InitialType, usersReducer} from "./usersReducer";

let state: InitialType;

beforeEach(() => {
    state = {
        users: [{
            id: 1,
            name: "Vlad 0",
            followed: false,
            photos: {small: null, large: null},
            status: 'status 0'
        }, {
            id: 2,
            name: "Vlad 1",
            followed: false,
            photos: {small: null, large: null},
            status: 'status 1'
        }, {
            id: 3,
            name: "Vlad 2",
            followed: true,
            photos: {small: null, large: null},
            status: 'status 2'
        }, {
            id: 4,
            name: "Vlad 3",
            followed: true,
            photos: {small: null, large: null},
            status: 'status 3'
        },],
        pageSize: 5,
        totalUsersCount: 0,
        currentPage: 1,
        isFetching: false,
        followingInProgress: []
    }
})

test('follow success', () => {
    const newState = usersReducer(state, actions.followSuccess(2))

    expect(newState.users[0].followed).toBeFalsy();
    expect(newState.users[1].followed).toBeTruthy();
})

test('unfollow success', () => {
    const newState = usersReducer(state, actions.unfollowSuccess(4))

    expect(newState.users[2].followed).toBeTruthy();
    expect(newState.users[3].followed).toBeFalsy();
})