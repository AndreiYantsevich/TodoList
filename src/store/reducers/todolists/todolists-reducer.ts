import {TodolistAction, TodolistActionEnum, TodolistStateType} from './types';
import {v1} from 'uuid';

let initialState: Array<TodolistStateType> = [
    {id: v1(), title: 'What to learn', filter: 'all'},
]

export default function todolistsReducer(state = initialState, action: TodolistAction) {
    switch (action.type) {
        case TodolistActionEnum.ADD_TODOLIST:
            return [...state, {id: v1(), title: action.title, filter: 'all'}]
        case TodolistActionEnum.CHANGE_TODOLIST_FILTER:
            return [...state].map(t => t.id === action.id ? {...t, filter: action.filter} : t)
        case TodolistActionEnum.CHANGE_TODOLIST_TITLE:
            return [...state].map(t => t.id === action.id ? {...t, title: action.title} : t)
        case TodolistActionEnum.DELETE_TODOLIST:
            return [...state].filter(t => t.id !== action.id)
        default:
            return state
    }
}