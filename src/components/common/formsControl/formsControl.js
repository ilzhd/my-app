import React from 'react'
import s from './formsControl.module.css'

export const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.visited && meta.error
    return (
        <div className={hasError && s.formControl + " " + s.error}>
            <div>
                <textarea {...props} {...input}/>
            </div>
            {hasError && <span>{meta.error}</span> }
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.visited && meta.error
    return (
        <div className={hasError && s.formControl + " " + s.error}>
            <div>
                <input {...props} {...input}/>
            </div>
            {hasError && <span>{meta.error}</span> }
        </div>
    )
}