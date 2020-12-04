import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../Redux/reducers/authReducer";
import {getIsAuthSelector, getLoginSelector} from "../../Redux/selectors/authSelectors";
import {AppStateType} from "../../Redux/redux-store";

type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
}

type MapDispatchToPropsType = {
    logout: () => void
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<PropsType> {
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

const mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: getIsAuthSelector(state),
        login: getLoginSelector(state),
    }
}


export default connect<MapStateToPropsType, MapDispatchToPropsType, null, AppStateType>(mapStateToProps, {
    logout
})(HeaderContainer);
