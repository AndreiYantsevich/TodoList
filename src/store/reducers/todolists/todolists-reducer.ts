import {TodolistAction, TodolistActionEnum, TodolistState} from './types';
import {v1} from 'uuid';

let todolistID1 = v1();
let todolistID2 = v1();

let initialState: Array<TodolistState> = [
    {id: todolistID1, title: 'What to learn', filter: 'all'},
    {id: todolistID2, title: 'What to buy', filter: 'all'},
]

export default function todolistsReducer(state = initialState, action: TodolistAction) {
    switch (action.type) {
        case TodolistActionEnum.ADD_TODOLIST:
            return [...state, {id: v1(), title: action.title, filter: 'all'}]
        case TodolistActionEnum.CHANGE_TODOLIST_FILTER:
            return [...state].map(t => t.id === action.todolistID ? {...t, filter: action.value} : t)
        case TodolistActionEnum.CHANGE_TODOLIST_TITLE:
            return [...state].map(t => t.id === action.todolistID ? {...t, title: action.title} : t)
        case TodolistActionEnum.DELETE_TODOLIST:
            return [...state].filter(t => t.id !== action.todolistID ? delete tasks[todolistID] : '')
    }
}