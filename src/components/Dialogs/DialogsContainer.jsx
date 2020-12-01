import {sendMessage} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";
import {getDialogs, getMessages} from "../../Redux/dialogsSelectors";

let mapStateToProps = (state) => {
    return {
        dialogs: getDialogs(state),
        messages: getMessages(state)
    }
}

export default compose(
    connect(mapStateToProps, {
        sendMessage,
    }),
    withAuthRedirect,
)(Dialogs);