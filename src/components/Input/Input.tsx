import {Button, IconButton, TextField} from '@material-ui/core';
import {AddBox} from '@material-ui/icons';
import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import style from './Input.module.css'


type PropsType = {
    addTask: (title: string) => void
}

export const Input = (props: PropsType) => {

    let [title, setTitle] = useState('')
    let [error, setError] = useState<boolean>(false)

    const addTaskHandler = () => {
        if (title.trim() !== '') {
            props.addTask(title)
            setTitle('')
        } else {
            setError(true);
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(false);
        if (e.charCode === 13) {
            addTaskHandler();
        }
    }

    return (
        <div>
            <TextField
                value={title}
                onChange={onChangeHandler}
                onKeyPress={onKeyPressHandler}
                size={'small'}
                error={error}
                helperText={error && 'Title is required!'}
                label={'Title'}
                variant={'outlined'}
            />
            <IconButton
                onClick={addTaskHandler}
                color={'primary'}
            >
                <AddBox/>
            </IconButton>
        </div>
    )
}