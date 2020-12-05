import {actions} from "../../Redux/reducers/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose} from "redux";
import {getDialogs, getMessages} from "../../Redux/selectors/dialogsSelectors";
import {AppStateType} from "../../Redux/redux-store";
import {DialogType, MessageType} from "../../types/types";
import React from "react";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type MapStateToPropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

type MapDispatchToPropsType = {
    sendMessage: (messageText: string) => void
}

type Props = MapStateToPropsType & MapDispatchToPropsType

class DialogsContainer extends React.Component<Props> {
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

export default compose<React.ComponentType>(
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {
        sendMessage: actions.sendMessage,
    }),
    withAuthRedirect,
)(DialogsContainer)