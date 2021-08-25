import {ChangeEvent, useState} from 'react';

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

    return (
        edit
            ? <input value={title} onBlur={deactivateEditMode} autoFocus onChange={onChangeHandler}/>
            : <span onDoubleClick={activateEditMode}>{props.title}</span>
    )
}