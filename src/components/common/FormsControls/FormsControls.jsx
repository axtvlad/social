import React from 'react';
import classes from './FormsControls.module.css';

const FormControls = ({input, meta: {touched, error}, child, ...props}) => {
    const hasError = touched && error;

    return (
        <div className={classes.formControl + ' ' + (hasError ? classes.error : '')}>
            <div>
                {props.children}
            </div>
            {hasError &&
            <div>
                <span>{error}</span>
            </div>
            }
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControls {...props}><textarea {...input} {...restProps}/></FormControls>
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControls {...props}><input {...input} {...restProps}/></FormControls>
}
