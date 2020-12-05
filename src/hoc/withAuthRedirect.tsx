import React from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {getIsAuthSelector} from "../Redux/selectors/authSelectors";
import {AppStateType} from "../Redux/redux-store";

const mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: getIsAuthSelector(state),
    }
}

type StateToProps = {
    isAuth: boolean
}

export function withAuthRedirect<WCP>(WrappedComponent: React.ComponentType<WCP>) {
    const RedirectComponent: React.FC<StateToProps> = (props) => {
        const {isAuth, ...restProps} = props

        if (!props.isAuth) {
            return <Redirect to={'/login'}/>
        }

        return <WrappedComponent {...restProps as WCP} />
    }

    return connect<StateToProps, {}, WCP, AppStateType>(mapStateToProps)(RedirectComponent)
}