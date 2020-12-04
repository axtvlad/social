import {me} from "./authReducer";

/**
 * CONSTANTS
 *
 * Constants for action creators
 */
const INITIALIZED_SUCCESS = 'social/app/INITIALIZED_SUCCESS';

/**
 * Type of initial state for AppReducer
 */
type InitialStateType = {
    initialized: boolean
}

/**
 * INITIAL
 *
 * initialized - [default: false] - Con be (false) or (true). If app is initialised then (true) else (false)
 */
const initial: InitialStateType = {
    initialized: false,
}

export const appReducer = (state = initial, action: any): InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
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

/**
 * Type of initializedSuccess action
 */
type InitializedSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS
}

/**
 * const func = (): InitializedSuccessActionType => {} значит, что фукнция возвращает объект типа InitializedSuccessActionType
 */

const initializedSuccess = (): InitializedSuccessActionType => (
    {
        type: INITIALIZED_SUCCESS,
    }
)

export const initializeApp = () => (dispatch: any) => {
    const promise = dispatch(me());

    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess());
        })
}