import {AppStateType} from "../redux-store";
import {DialogType, MessageType} from "../../types/types";

export const getDialogs = (state: AppStateType): Array<DialogType> => {
    return state.dialogsPage.dialogs;
}

export const getMessages = (state: AppStateType): Array<MessageType> => {
    return state.dialogsPage.messages;
}