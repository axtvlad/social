import {actions} from "../../Redux/reducers/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose} from "redux";
import {getDialogs, getMessages} from "../../Redux/selectors/dialogsSelectors";
import {AppStateType} from "../../Redux/redux-store";
import {DialogType, MessageType} from "../../types/types";
import React from "react";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type StateToProps = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

type DispatchToProps = {
    sendMessage: (messageText: string) => void
}

type Props = StateToProps & DispatchToProps

class DialogsContainer extends React.Component<Props> {
    render() {
        const {messages, dialogs, sendMessage} = this.props;

        return (
            <Dialogs messages={messages} dialogs={dialogs} sendMessage={sendMessage}/>
        )
    }
}

const mapStateToProps = (state: AppStateType): StateToProps => {
    return {
        dialogs: getDialogs(state),
        messages: getMessages(state)
    }
}

export default compose<React.ComponentType>(
    connect<StateToProps, DispatchToProps, {}, AppStateType>(mapStateToProps, {
        sendMessage: actions.sendMessage,
    }),
    withAuthRedirect,
)(DialogsContainer)