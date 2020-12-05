import React from 'react'
import './App.css'
import Navbar from "./components/Navbar/Navbar"
import News from "./components/News/News"
import Music from "./components/Music/Music"
import Settings from "./components/Settings/Settings"
import HeaderContainer from "./components/Header/HeaderContainer"
import Login from "./components/Login/Login"
import {connect, Provider} from "react-redux"
import {compose} from "redux"
import {HashRouter, Redirect, Route, withRouter} from "react-router-dom"
import {initializeApp} from "./Redux/reducers/appReducer"
import Preloader from "./components/common/Preloader/Preloader"
import store, {AppStateType} from "./Redux/redux-store"
import {withSuspense} from "./hoc/withSuspense"

const DialogsContainer = React.lazy(() => import ("./components/Dialogs/DialogsContainer"))
const ProfileContainer = React.lazy(() => import ("./components/Profile/ProfileContainer"))
const UsersContainer = React.lazy(() => import ("./components/Users/UsersContainer"))

const SuspendedDialogsContainer = withSuspense(DialogsContainer)
const SuspendedProfileContainer = withSuspense(ProfileContainer)
const SuspendedUsersContainer = withSuspense(UsersContainer)

type Props = {
    initializeApp: () => void
    initialized: boolean
}

class App extends React.Component<Props> {
    componentDidMount() {
        const {initializeApp} = this.props

        initializeApp();
    }

    render() {
        const {initialized} = this.props;

        if (!initialized) {
            return <Preloader/>
        }

        return (
            <div className={'app-wrapper'}>
                <HeaderContainer/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Redirect exact from="/" to="/profile"/>
                    <Route render={() => <SuspendedDialogsContainer/>} path={'/dialogs'}/>
                    <Route render={() => <SuspendedProfileContainer/>} path={'/profile/:userId?'}/>
                    <Route render={() => <SuspendedUsersContainer/>} path={'/users'}/>
                    <Route render={() => <News/>} path={'/news'}/>
                    <Route render={() => <Music/>} path={'/music'}/>
                    <Route render={() => <Settings/>} path={'/settings'}/>
                    <Route render={() => <Login/>} path={'/login'}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        initialized: state.app.initialized,
    }
}

const AppContainer = compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App);

const SocialApp: React.FC = () => {
    return (
        <React.StrictMode>
            <HashRouter>
                <Provider store={store}>
                    <AppContainer/>
                </Provider>
            </HashRouter>
        </React.StrictMode>
    )
}

export default SocialApp;