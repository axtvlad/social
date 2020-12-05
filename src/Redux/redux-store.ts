import {Action, applyMiddleware, combineReducers, compose, createStore} from "redux"
import {profileReducer} from "./reducers/profileReducer"
import {dialogsReducer} from "./reducers/dialogsReducer"
import {usersReducer} from "./reducers/usersReducer"
import {authReducer} from "./reducers/authReducer"
import thunk, {ThunkAction} from 'redux-thunk'
import {appReducer} from "./reducers/appReducer"

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

export type InferActionsTypes<T> = T extends { [key: string]: (...args: any[]) => infer U } ? U : never
export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
))

export default store