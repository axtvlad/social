import classes from "./Contact.module.css";
import React from "react";

type Props = {
    contactTitle: string
    contactValue: string
}

const Contact: React.FC<Props> = ({contactTitle, contactValue}) => {
    return (
        <div className={classes.contact}>
            <b>{contactTitle}</b>: <a href={contactValue} target={'_blank'} rel={'noreferrer'}>{contactValue}</a>
        </div>
    )
}

export default Contact;