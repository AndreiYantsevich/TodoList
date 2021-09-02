import { TextField } from '@material-ui/core';
import {ChangeEvent, KeyboardEvent, useState} from 'react';

type propsType = {
    title: string
    callback: (title: string) => void
}

export const EditableSpan = (props: propsType) => {

    let [edit, setEdit] = useState(false)
    let [title, setTitle] = useState(props.title)

    const activateEditMode = () => {
        setEdit(true)
    }

    const deactivateEditMode = () => {
        setEdit(false)
        props.callback(title)
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressOffEditMode = (event: KeyboardEvent<HTMLInputElement>) => {
        if(event.key === "Enter"){
            deactivateEditMode()
        }
    }

    return (
        edit
            ? <TextField
                onChange={onChangeHandler}
                value={title}
                onBlur={deactivateEditMode}
                autoFocus
                onKeyPress={onKeyPressOffEditMode}
            />
            : <span onDoubleClick={activateEditMode}>{props.title}</span>
    )
}