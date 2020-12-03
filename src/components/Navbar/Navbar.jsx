import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    const links = [
        {
            to: '/profile',
            name: 'Profile'
        }, {
            to: '/dialogs',
            name: 'Dialogs'
        }, {
            to: '/users',
            name: 'Users'
        }, {
            to: '/settings',
            name: 'Settings'
        }
    ]

    return (
        <nav className={classes.nav}>
            {links.map(link => {
                return (
                    <div className={classes.item} key={link.to}>
                        <NavLink to={link.to} activeClassName={classes.active}>
                            {link.name}
                        </NavLink>
                    </div>
                )
            })}
        </nav>
    );
}

export default Navbar;
