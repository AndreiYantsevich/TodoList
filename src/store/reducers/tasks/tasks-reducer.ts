import {v1} from 'uuid';
import {TasksAction, TasksActionEnum, TasksStateType, TaskType} from './tasks-types';
import {TodolistsActionEnum} from '../todolists/todolists-types';


const initialState: TasksStateType = {}


export default function tasksReducer(state: TasksStateType = initialState, action: TasksAction): TasksStateType {
    switch (action.type) {
        case TasksActionEnum.REMOVE_TASK:
            return {...state, [action.payload.todolistId]: state[action.payload.todolistId].filter(t => t.id !== action.payload.taskId)}
        case TasksActionEnum.ADD_TASK:
            let newTask: TaskType = {id: v1(), title: action.payload.title, isDone: false};
            return {...state, [action.payload.todolistId]: [newTask, ...state[action.payload.todolistId]]}
        case TasksActionEnum.CHANGE_TASK_STATUS:
            return {...state, [action.payload.todolistId]: state[action.payload.todolistId].map(t => t.id === action.payload.taskId ?
                    {...t, isDone: action.payload.isDone} : t)}
        case TasksActionEnum.CHANGE_TASK_TITLE:
            return {...state, [action.payload.todolistId]: state[action.payload.todolistId].map(t => t.id === action.payload.taskId ?
                    {...t, title: action.payload.title} : t)}
        case TodolistsActionEnum.ADD_TODOLIST:
            return {...state, [action.payload.todolistId]: []}
        case TodolistsActionEnum.REMOVE_TODOLIST:
            let stateCopy = {...state};
            delete stateCopy[action.payload.todolistId]
            return stateCopy
        default:
            return state;
    }
}
