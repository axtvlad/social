import React from 'react';
import classes from './FormsControls.module.css';

type Props = {
    meta: {
        touched: boolean,
        error: string
    }
}

const FormControls: React.FC<Props> = ({meta: {touched, error}, children, ...props}) => {
    const hasError = touched && error;

    return (
        <div className={classes.formControl + ' ' + (hasError ? classes.error : '')}>
            <div>
                {children}
            </div>
            {hasError &&
            <div>
                <span>{error}</span>
            </div>
            }
        </div>
    )
}

export const Textarea = (props: any) => {
    const {input, meta, child, ...restProps} = props;

    return <FormControls {...props}><textarea {...input} {...restProps}/></FormControls>
}

export const Input = (props: any) => {
    const {input, meta, child, ...restProps} = props;

    return <FormControls {...props}><input {...input} {...restProps}/></FormControls>
}
