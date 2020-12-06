import {actions, follow} from "./usersReducer"
import {APIResponseType} from "../../api/AuthAPI"
import {ResultCodesEnum} from "../../api/api"
import {usersAPI} from "../../api/UsersAPI"

jest.mock('../../api/UsersAPI')

const apiMock = usersAPI as jest.Mocked<typeof usersAPI>

let result: APIResponseType = {
    resultCode: ResultCodesEnum.Success,
    data: {},
    messages: []
}

apiMock.follow.mockReturnValue(Promise.resolve(result))

test('follow thunk', async () => {
    const thunk = follow(1)
    const dispatch = jest.fn()
    const getState = jest.fn()

    await thunk(dispatch, getState, {})

    expect(dispatch).toBeCalledTimes(3)
    expect(dispatch).toHaveBeenNthCalledWith(1, actions.setFollowingInProgress(true, 1))
    expect(dispatch).toHaveBeenNthCalledWith(2, actions.followSuccess(1))
    expect(dispatch).toHaveBeenNthCalledWith(3, actions.setFollowingInProgress(false, 1))
})
