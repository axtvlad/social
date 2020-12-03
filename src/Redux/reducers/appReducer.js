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
 * @typedef initial
 * @type {object}
 * @property {boolean}      initialized     [default: false]    Con be (false) or (true). If app is initialised then (true) else (false)
 */
const initial = {
    initialized: false,
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