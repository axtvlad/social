import classes from "./Contact.module.css";
import React from "react";

type Props = {
    contactTitle: string
    contactValue: string
}

export const Contact: React.FC<Props> = ({contactTitle, contactValue}) => {
    const styles = {
        wrapper: {
            paddingLeft: 10
        }
    }

    return (
        <div style={styles.wrapper}>
            <b>{contactTitle}</b>: <a href={contactValue} target={'_blank'} rel={'noreferrer'}>{contactValue}</a>
        </div>
    )
}
