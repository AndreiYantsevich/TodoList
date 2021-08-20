import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import style from './Input.module.css'


type PropsType = {
    title: string
    setTitle: (title: string) => void
    addTask: (title: string, todolistID: string) => void
    todolistID: string
}

export const Input = (props: PropsType) => {


    let [error, setError] = useState<string | null>(null)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.charCode === 13) {
            props.addTask(props.title, props.todolistID);
            props.setTitle('')
        }
    }

    return (
        <div>
            <input value={props.title}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
                   className={error ? style.error : ''}
            />
            {error && <div className="error-message">{error}</div>}
        </div>
    )
}