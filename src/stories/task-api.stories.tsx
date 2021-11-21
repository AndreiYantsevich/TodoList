import React, {useEffect, useState} from 'react';
import {taskApi} from '../api/task-api';

export default {
    title: 'API'
}

export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = 'e71ecdd8-f8d6-47a2-8b39-6663fcda2b2d'
        taskApi.getTask(todolistId)
            .then((res) => {
                setState(res.data);
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const CreateTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = 'e71ecdd8-f8d6-47a2-8b39-6663fcda2b2d'
        const title = 'AVAVAVA'
        taskApi.createTask(todolistId, title)
            .then((res) => {
                setState(res.data);
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const DeleteTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = 'e71ecdd8-f8d6-47a2-8b39-6663fcda2b2d'
        const taskId = '4d7cdf1e-b66e-4b7f-8341-5088f7a0bf82'
        taskApi.deleteTask(todolistId, taskId)
            .then((res) => {
                setState(res.data);
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const UpdateTaskTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoListId = 'e71ecdd8-f8d6-47a2-8b39-6663fcda2b2d'
        const taskId = 'a621d69e-7fb9-4282-93fe-e3cd74d750ad'
        taskApi.updateTaskTitle(todoListId, taskId, {
            title: "Hello My friends!!!!",
            deadline: "",
            description: "This desc",
            priority: 343,
            startDate: "",
            status: 34
        })
            .then((res) => {
                setState(res.data);
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
