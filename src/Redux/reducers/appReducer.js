import {me} from "./authReducer";

/**
 * CONSTANTS
 *
 * Constants for action creators
 */
const INITIALIZED_SUCCESS = 'social/app/INITIALIZED_SUCCESS';

/**
 * INITIAL
 *
 * initialized - [default: false] - Con be (false) or (true). If app is initialised then (true) else (false)
 * globalError - [default: null] - Con be (null) or (string). If app have some errors then (string) else (null)
 */
const initial = {
    initialized: false,
    globalError: null,
}

export const appReducer = (state = initial, action) => {
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

const initializedSuccess = () => (
    {
        type: INITIALIZED_SUCCESS,
    }
)

export const initializeApp = () => (dispatch) => {
    const promise = dispatch(me());

    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess());
        })
}