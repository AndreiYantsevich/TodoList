import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import style from './Input.module.css'


type PropsType = {
    addTask: (title: string) => void
}

export const Input = (props: PropsType) => {

    let [title, setTitle] = useState('')
    let [error, setError] = useState<string | null>(null)

    const addTaskHandler = () => {
        if (title.trim() !== '') {
            props.addTask(title)
            setTitle('')
        } else {
            setError('Title is required');
        }
    }

        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
            setTitle(e.currentTarget.value)
        }

        const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
            setError(null);
            if (e.charCode === 13) {
                addTaskHandler();
            }
        }

        return (
            <div>
                <input value={title}
                       onChange={onChangeHandler}
                       onKeyPress={onKeyPressHandler}
                       className={error ? style.error : ''}
                />
                <button onClick={addTaskHandler}>+</button>
                {error && <div className="error-message">{error}</div>}
            </div>
        )
    }