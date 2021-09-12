import {v1} from 'uuid';
import {TaskAction, TaskActionEnum, TaskStateType} from './types';

let initialState: Array<TaskStateType> = [
        {id: v1(), title: 'HTML&CSS', isDone: true},
        {id: v1(), title: 'JS', isDone: true},
        {id: v1(), title: 'ReactJS', isDone: false},
        {id: v1(), title: 'Rest API', isDone: false},
        {id: v1(), title: 'GraphQL', isDone: false},
    ]

export default function tasksReducer(state = initialState, action: TaskAction) {
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