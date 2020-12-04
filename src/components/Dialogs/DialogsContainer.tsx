import {sendMessage} from "../../Redux/reducers/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";
import {getDialogs, getMessages} from "../../Redux/selectors/dialogsSelectors";
import {AppStateType} from "../../Redux/redux-store";
import {DialogType, MessageType} from "../../types/types";
import React from "react";

type MapStateToPropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

type MapDispatchToPropsType = {
    sendMessage: (messageText: string) => void
}

type OwnPropsType = {}

type PropsType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType

class DialogsContainer extends React.Component<PropsType> {
    render() {
        const {messages, dialogs, sendMessage} = this.props;

        return (
            <Dialogs messages={messages} dialogs={dialogs} sendMessage={sendMessage}/>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogs: getDialogs(state),
        messages: getMessages(state)
    }
}

export default compose(
    connect<MapStateToPropsType, MapDispatchToPropsType, null, AppStateType>(mapStateToProps, {
        sendMessage,
    }),
    withAuthRedirect,
)(DialogsContainer);