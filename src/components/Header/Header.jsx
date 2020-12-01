import React from 'react';
import classes from './Header.module.css';
import ava from '../../media/Ava.jpg';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <div className={classes.header}>
            <img className={classes.logo} src={ava} alt={'logo'}/>
            <div className={classes.loginBlock}>
                {props.isAuth
                    ? <div>{props.login}
                        <button onClick={props.logout}>Logout</button>
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
