import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../Redux/reducers/authReducer";
import {getIsAuthSelector, getLoginSelector} from "../../Redux/selectors/authSelectors";
import {AppStateType} from "../../Redux/redux-store";

type StateToProps = {
    isAuth: boolean
    login: string | null
}

type DispatchToProps = {
    logout: () => void
}

type Props = StateToProps & DispatchToProps

class HeaderContainer extends React.Component<Props> {
    render() {
        const {logout, login, isAuth} = this.props;
        return (
            <Header
                logout={logout}
                isAuth={isAuth}
                login={login}
            />
        );
    }
}

const mapStateToProps = (state: AppStateType): StateToProps => {
    return {
        isAuth: getIsAuthSelector(state),
        login: getLoginSelector(state),
    }
}


export default connect<StateToProps, DispatchToProps, {}, AppStateType>(mapStateToProps, {
    logout
})(HeaderContainer);
