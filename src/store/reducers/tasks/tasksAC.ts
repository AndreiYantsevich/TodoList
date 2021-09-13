import {TaskActionEnum} from './types';


export const AddTaskAC = (title: string) => ({
    type: TaskActionEnum.ADD_TASK,
    title
} as const)

export const ChangeTaskStatusAC = (id: string, isDone: boolean) => ({
    type: TaskActionEnum.CHANGE_TASK_STATUS,
    id,
    isDone
} as const)

export const ChangeTaskTitleAC = (id: string, title: string) => ({
    type: TaskActionEnum.CHANGE_TASK_TITLE,
    id,
    title
} as const)

export const DeleteTaskAC = (id: string) => ({
    type: TaskActionEnum.DELETE_TASK,
    id
} as const)
