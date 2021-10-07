import {AddTodolistAction, RemoveTodolistAction} from '../todolists/todolists-types';

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export type FilterValuesType = "all" | "active" | "completed";

export type TasksStateType = {
    [key: string]: Array<TaskType>
}

export enum TasksActionEnum {
    REMOVE_TASK = 'REMOVE_TASK',
    ADD_TASK = 'ADD_TASK',
    CHANGE_TASK_TITLE = 'CHANGE_TASK_TITLE',
    CHANGE_TASK_STATUS = 'CHANGE_TASK_STATUS',
}

export interface RemoveTaskAction {
    type: TasksActionEnum.REMOVE_TASK;
    payload: {
        taskId: string;
        todolistId: string;
    }
}

export interface AddTaskAction {
    type: TasksActionEnum.ADD_TASK;
    payload: {
        title: string;
        todolistId: string;
    }
}

export interface ChangeTaskStatusAction {
    type: TasksActionEnum.CHANGE_TASK_STATUS;
    payload: {
        taskId: string;
        isDone: boolean;
        todolistId: string;
    }
}

export interface ChangeTaskTitleAction {
    type: TasksActionEnum.CHANGE_TASK_TITLE;
    payload: {
        taskId: string;
        title: string;
        todolistId: string;
    }
}

export type TasksAction =
    RemoveTaskAction |
    AddTaskAction |
    ChangeTaskStatusAction |
    ChangeTaskTitleAction |
    AddTodolistAction |
    RemoveTodolistAction