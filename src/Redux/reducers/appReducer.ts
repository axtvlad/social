import {me} from "./authReducer"
import {InferActionsTypes} from "../redux-store"

/**
 * Type of initial state for AppReducer
 */
type InitialStateType = typeof initial

/**
 * INITIAL
 *
 * initialized - [default: false] - Con be (false) or (true). If app is initialised then (true) else (false)
 */
const initial = {
    initialized: false,
}

export const appReducer = (state = initial, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case 'SOCIAL/APP/INITIALIZED_SUCCESS': {
            return {
                ...state,
                initialized: true
            }
        }
        default: {
            return state;
        }
    }
}

// type DispatchType = Dispatch<ActionTypes>
// type ThunkType = BaseThunkType<ActionTypes>

type ActionTypes = InferActionsTypes<typeof actions>

/**
 * const func = (): InitializedSuccessActionType => {} значит, что фукнция возвращает объект типа InitializedSuccessActionType
 */

export const actions = {
    initializedSuccess: () => ({
        type: 'SOCIAL/APP/INITIALIZED_SUCCESS',
    } as const)
}

export const initializeApp = () => (dispatch: any) => {
    const promise = dispatch(me());

    Promise.all([promise])
        .then(() => {
            dispatch(actions.initializedSuccess());
        })
}