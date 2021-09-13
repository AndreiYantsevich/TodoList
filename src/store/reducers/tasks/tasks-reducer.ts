import {v1} from 'uuid';
import {ActionType, TaskActionEnum, TaskType} from './types';

let initialState: Array<TaskType> = []

export default function tasksReducer(state = initialState, action: ActionType) {
    switch (action.type) {
        case TaskActionEnum.ADD_TASK:
            return [...state, {id: v1(), title: action.title, isDone: false}]

        case TaskActionEnum.CHANGE_TASK_STATUS:
            return [...state].map(t => t.id === action.id ? {...t, isDone: action.isDone} : t)

        case TaskActionEnum.CHANGE_TASK_TITLE:
            return [...state].map(t => t.id === action.id ? {...t, title: action.title} : t)

        case TaskActionEnum.DELETE_TASK:
            return [...state].filter(t => t.id !== action.id)
        default:
            return state
    }
}