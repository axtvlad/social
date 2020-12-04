import React from 'react';
import classes from './Header.module.css';
import ava from '../../media/Ava.jpg';
import {NavLink} from "react-router-dom";

type PropsType = {
    isAuth: boolean
    login: string | null
    logout: () => void
}

const Header: React.FC<PropsType> = ({isAuth, login, logout}) => {
    return (
        <div className={classes.header}>
            <img className={classes.logo} src={ava} alt={'logo'}/>
            <div className={classes.loginBlock}>
                {isAuth
                    ? <div>{login}
                        <button onClick={logout}>Logout</button>
                    </div>
                    : <NavLink to={'/login'}>
                        Login
                    </NavLink>
                }
            </div>
        </div>
    );
}

export default Header;
