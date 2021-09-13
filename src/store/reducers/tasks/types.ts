import {AddTaskAC, ChangeTaskStatusAC, ChangeTaskTitleAC, DeleteTaskAC} from './tasksAC'

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export enum TaskActionEnum {
    ADD_TASK = 'ADD_TASK',
    CHANGE_TASK_STATUS = 'CHANGE_TASK_STATUS',
    CHANGE_TASK_TITLE = 'CHANGE_TASK_TITLE',
    DELETE_TASK = 'DELETE_TASK'
}

export type AddTaskACType = ReturnType<typeof AddTaskAC>

export type ChangeTaskStatusACType = ReturnType<typeof ChangeTaskStatusAC>

export type ChangeTaskTitleACType = ReturnType<typeof ChangeTaskTitleAC>

export type DeleteTaskACType = ReturnType<typeof DeleteTaskAC>

export type ActionType =
    AddTaskACType |
    ChangeTaskStatusACType |
    ChangeTaskTitleACType |
    DeleteTaskACType