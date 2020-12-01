import {me} from "./authReducer";

const INITIALIZED_SUCCESS = 'social/app/INITIALIZED_SUCCESS';

let initial = {
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

export const initializedSuccess = () => (
    {
        type: INITIALIZED_SUCCESS,
    }
)

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(me());

    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess());
        })
}

export default appReducer;