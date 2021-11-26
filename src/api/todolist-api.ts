import axios from 'axios';

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.1/`,
    withCredentials: true,
    headers: {
        'API-KEY': '7e5b4528-2880-4677-b629-b878b7697787'
    }
})

//api
export const todolistApi = {
    getTodos() {
        return instance.get<Array<TodolistType>>(`todo-lists`)
    },
    createTodo(title: string) {
        return instance.post<ResponseType<TodolistType>>(`todo-lists`, {title})
    },
    deleteTodo(todolistId: string) {
        return instance.delete<ResponseType>(`todo-lists/${todolistId}`)
    },
    updateTodoTitle(todolistId: string, title: string) {
        return instance.put<ResponseType>(`todo-lists/${todolistId}`, {title})
    }
}

//types
type ResponseType<T = {}> = {
    resultCode: number
    messages: Array<string>
    fieldsError: Array<string>
    data: T
}
export type TodolistType = {
    id: string
    title: string
    addedDate: string
    order: number
}

