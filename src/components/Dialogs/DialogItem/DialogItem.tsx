import React from 'react';
import classes from './DialogItem.module.css'
import {NavLink} from "react-router-dom";

type Props = {
    id: number
    name: string
}

export const DialogItem: React.FC<Props> = ({id, name}) => {
    const pathTo = `/dialogs/${id}`;

    return (
        <div className={`${classes.dialog} ${classes.active}`}>
            <NavLink to={pathTo} activeClassName={classes.active}>{name}</NavLink>
        </div>
    )
}