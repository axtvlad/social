import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../Redux/authReducer";
import {getIsAuthSelector, getLoginSelector} from "../../Redux/authSelectors";

class HeaderContainer extends React.Component {
    render() {
        return (
            <Header
                logout={this.props.logout}
                isAuth={this.props.isAuth}
                login={this.props.login}
            />
        );
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: getIsAuthSelector(state),
        login: getLoginSelector(state),
    }
}


export default connect(mapStateToProps, {
    logout
})(HeaderContainer);