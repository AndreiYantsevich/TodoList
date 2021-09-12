
export type TaskStateType = {
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

export interface AddTaskAction {
    type: TaskActionEnum.ADD_TASK;
    title: string
}

export interface ChangeTaskStatusAction {
    type: TaskActionEnum.CHANGE_TASK_STATUS;
    id: string
    isDone: boolean
}

export interface ChangeTaskTitleAction {
    type: TaskActionEnum.CHANGE_TASK_TITLE;
    id: string
    title: string
}

export interface DeleteTaskAction {
    type: TaskActionEnum.DELETE_TASK;
    id: string
}

export type TaskAction =
    AddTaskAction |
    ChangeTaskStatusAction |
    ChangeTaskTitleAction |
    DeleteTaskAction