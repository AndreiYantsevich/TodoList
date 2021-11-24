import React, {useEffect, useState} from 'react';
import {todolistApi} from '../api/todolist-api';
import {dividerClasses} from '@mui/material';

export default {
    title: 'API'
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistApi.getTodos()
            .then((res) => {
                setState(res.data);
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    const [todolistTitle, setTodolistTitle] = useState<string>('')
    const createTodolist = () => {
        todolistApi.createTodo(todolistTitle)
            .then((res) => {
                setState(res.data);
            })
    }

    return <div> {JSON.stringify(state)}
    <div>
        <input placeholder={'todolistTitle'} value={todolistTitle} onChange={(e) => {setTodolistTitle(e.currentTarget.value)}}/>
        <button onClick={createTodolist}>add</button>
    </div>
    </div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    const [todolistId, setTodolistId] = useState<string>('')
    const deleteTodolist = () => {
        todolistApi.deleteTodo(todolistId)
            .then((res) => {
                setState(res.data);
            })
    }

    return <div> {JSON.stringify(state)}
        <div>
            <input placeholder={'todolistId'} value={todolistId} onChange={(e) => {setTodolistId(e.currentTarget.value)}}/>
            <button onClick={deleteTodolist}>delete</button>
        </div>
    </div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    const [todolistId, setTodolistId] = useState<string>('')
    const [todolistTitle, setTodolistTitle] = useState<string>('')

    const updateTitle = () => {
        todolistApi.updateTodoTitle(todolistId, todolistTitle)
            .then((res) => {
                setState(res.data);
            })
    }

    return <div> {JSON.stringify(state)}
        <div>
            <input placeholder={'todolistId'} value={todolistId} onChange={(e) => {setTodolistId(e.currentTarget.value)}}/>
            <input placeholder={'todolistTitle'} value={todolistTitle} onChange={(e) => {setTodolistTitle(e.currentTarget.value)}}/>
            <button onClick={updateTitle}>update</button>
        </div>
    </div>
}
