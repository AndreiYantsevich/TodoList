import {
    FilterValuesType,
    TodolistActionEnum
} from './types';


export const AddTodolistAC = (title: string) => ({
    type: TodolistActionEnum.ADD_TODOLIST,
    title
} as const)

export const ChangeTodolistTitleAC = (id: string, title: string) => ({
    type: TodolistActionEnum.CHANGE_TODOLIST_TITLE,
    id,
    title
} as const)

export const ChangeTodolistFilterAC = (id: string, filter: FilterValuesType) => ({
    type: TodolistActionEnum.CHANGE_TODOLIST_FILTER,
    id,
    filter
} as const)

export const DeleteTodolistAC = (id: string) => ({
    type: TodolistActionEnum.DELETE_TODOLIST,
    id
} as const)