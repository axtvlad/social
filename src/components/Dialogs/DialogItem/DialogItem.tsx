import React from 'react';
import classes from './DialogItem.module.css'
import {NavLink} from "react-router-dom";

type Props = {
    id: number
    name: string
}

const DialogItem: React.FC<Props> = ({id, name}) => {
    const path = '/dialogs/';

    return (
        <div className={`${classes.dialog} ${classes.active}`}>
            <NavLink to={path + id} activeClassName={classes.active}>{name}</NavLink>
        </div>
    )
}

export default DialogItem;