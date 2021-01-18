import React from 'react'
import './App.css'
import "antd/dist/antd.css"
import {Navbar} from "./components/Navbar/Navbar"
import News from "./components/News/News"
import Music from "./components/Music/Music"
import Settings from "./components/Settings/Settings"
import {LoginPage} from "./components/Login/Login"
import {connect, Provider} from "react-redux"
import {compose} from "redux"
import {BrowserRouter, Redirect, Route, Switch, withRouter} from "react-router-dom"
import {initializeApp} from "./Redux/reducers/appReducer"
import Preloader from "./components/common/Preloader/Preloader"
import store, {AppStateType} from "./Redux/redux-store"
import {withSuspense} from "./hoc/withSuspense"
import {UsersPage} from "./components/Users/UsersPage";
import {Layout} from 'antd';
import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import {ChatPage} from "./components/pages/Chat/ChatPage";

const DialogsContainer = React.lazy(() => import ("./components/Dialogs/DialogsContainer"))
const ProfileContainer = React.lazy(() => import ("./components/Profile/ProfileContainer"))

const SuspendedDialogsContainer = withSuspense(DialogsContainer)
const SuspendedProfileContainer = withSuspense(ProfileContainer)

const {Content} = Layout;

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
            <Layout>
                <Header/>
                <Content style={{padding: '0 50px'}}>
                    <Layout className="site-layout-background" style={{padding: '24px 0'}}>
                        <Navbar/>
                        <Content style={{padding: '0 24px', minHeight: 280}}>
                            <Switch>
                                <Route render={() => <SuspendedDialogsContainer/>} path={'/dialogs'}/>
                                <Route render={() => <SuspendedProfileContainer/>} path={'/profile/:userId?'}/>
                                <Route render={() => <UsersPage/>} path={'/users'}/>
                                <Route render={() => <News/>} path={'/news'}/>
                                <Route render={() => <Music/>} path={'/music'}/>
                                <Route render={() => <Settings/>} path={'/settings'}/>
                                <Route render={() => <LoginPage/>} path={'/login'}/>
                                <Route render={() => <ChatPage/>} path={'/chat'}/>
                                <Redirect exact from="/" to="/profile"/>
                            </Switch>
                        </Content>
                    </Layout>
                </Content>
                <Footer/>
            </Layout>
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
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    )
}

export default SocialApp;
