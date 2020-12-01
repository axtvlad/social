import React from 'react';
import './App.css'
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import {initializeApp} from "./Redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./Redux/redux-store";
import {withSuspense} from "./hoc/withSuspense";

const DialogsContainer = React.lazy(() => import ("./components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import ("./components/Profile/ProfileContainer"));
const UsersContainer = React.lazy(() => import ("./components/Users/UsersContainer"));

class App extends React.Component {
    componentDidMount() {
        let {initializeApp} = this.props

        initializeApp();
    }

    render() {
        let {initialized} = this.props;

        if (!initialized) {
            return <Preloader/>
        }

        return (
            <div className={'app-wrapper'}>
                <HeaderContainer/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route render={withSuspense(DialogsContainer)} path={'/dialogs'}/>
                    <Route render={withSuspense(ProfileContainer)} path={'/profile/:userId?'}/>
                    <Route render={withSuspense(UsersContainer)} path={'/users'}/>
                    <Route render={() => <News/>} path={'/news'}/>
                    <Route render={() => <Music/>} path={'/music'}/>
                    <Route render={() => <Settings/>} path={'/settings'}/>
                    <Route render={() => <Login/>} path={'/login'}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized,
    }
}

const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App);

const SocialApp = (props) => {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <AppContainer/>
                </Provider>
            </BrowserRouter>
        </React.StrictMode>
    )
}

export default SocialApp;