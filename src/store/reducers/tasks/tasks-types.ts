import {TaskType} from '../../../components/Todolist';
import {TasksActionCreators} from './tasks-action-creators';

export type TasksStateType = {
    [key: string]: Array<TaskType>
}

export enum TasksActionEnum {
    REMOVE_TASK = 'REMOVE_TASK',
    ADD_TASK = 'ADD_TASK',
    CHANGE_TASK_TITLE = 'CHANGE_TASK_TITLE',
    CHANGE_TASK_STATUS = 'CHANGE_TASK_STATUS',
    ADD_TODOLIST = 'ADD_TODOLIST',
    REMOVE_TODOLIST = 'REMOVE_TODOLIST',
}

export type TasksAction =
    ReturnType<typeof TasksActionCreators.removeTask> |
    ReturnType<typeof TasksActionCreators.addTask> |
    ReturnType<typeof TasksActionCreators.changeTaskStatus> |
    ReturnType<typeof TasksActionCreators.changeTaskTitle>