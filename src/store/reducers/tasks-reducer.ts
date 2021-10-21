import {v1} from 'uuid';
import {AddTodolistAction, RemoveTodolistAction, TodolistEnum} from './todolists-reducer';

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export type FilterValuesType = 'all' | 'active' | 'completed';

export type TasksStateType = {
    [key: string]: Array<TaskType>
}

export enum TaskEnum {
    REMOVE_TASK = 'REMOVE_TASK',
    ADD_TASK = 'ADD_TASK',
    CHANGE_TASK_TITLE = 'CHANGE_TASK_TITLE',
    CHANGE_TASK_STATUS = 'CHANGE_TASK_STATUS',
}

interface RemoveTaskAction {
    type: TaskEnum.REMOVE_TASK;
    payload: {
        taskId: string;
        todolistId: string;
    }
}

interface AddTaskAction {
    type: TaskEnum.ADD_TASK;
    payload: {
        title: string;
        todolistId: string;
    }
}

interface ChangeTaskStatusAction {
    type: TaskEnum.CHANGE_TASK_STATUS;
    payload: {
        taskId: string;
        isDone: boolean;
        todolistId: string;
    }
}

interface ChangeTaskTitleAction {
    type: TaskEnum.CHANGE_TASK_TITLE;
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

const initialState: TasksStateType = {}

export default function tasksReducer(state: TasksStateType = initialState, action: TasksAction): TasksStateType {
    switch (action.type) {
        case TaskEnum.REMOVE_TASK:
            return {
                ...state,
                [action.payload.todolistId]: state[action.payload.todolistId].filter(t => t.id !== action.payload.taskId)
            }
        case TaskEnum.ADD_TASK:
            let newTask: TaskType = {id: v1(), title: action.payload.title, isDone: false};
            return {...state, [action.payload.todolistId]: [newTask, ...state[action.payload.todolistId]]}
        case TaskEnum.CHANGE_TASK_STATUS:
            return {
                ...state,
                [action.payload.todolistId]: state[action.payload.todolistId].map(t => t.id === action.payload.taskId ?
                    {...t, isDone: action.payload.isDone} : t)
            }
        case TaskEnum.CHANGE_TASK_TITLE:
            return {
                ...state,
                [action.payload.todolistId]: state[action.payload.todolistId].map(t => t.id === action.payload.taskId ?
                    {...t, title: action.payload.title} : t)
            }
        case TodolistEnum.ADD_TODOLIST:
            return {...state, [action.payload.todolistId]: []}
        case TodolistEnum.REMOVE_TODOLIST:
            let stateCopy = {...state};
            delete stateCopy[action.payload.todolistId]
            return stateCopy
        default:
            return state;
    }
}

export const TasksActions = {
    removeTask: (taskId: string, todolistId: string): RemoveTaskAction => ({
        type: TaskEnum.REMOVE_TASK,
        payload: {taskId, todolistId}
    }),
    addTask: (title: string, todolistId: string): AddTaskAction => ({
        type: TaskEnum.ADD_TASK,
        payload: {title, todolistId}
    }),
    changeTaskStatus: (taskId: string, isDone: boolean, todolistId: string): ChangeTaskStatusAction => ({
        type: TaskEnum.CHANGE_TASK_STATUS,
        payload: {taskId, isDone, todolistId}
    }),
    changeTaskTitle: (taskId: string, title: string, todolistId: string): ChangeTaskTitleAction => ({
        type: TaskEnum.CHANGE_TASK_TITLE,
        payload: {taskId, title, todolistId}
    }),
}
