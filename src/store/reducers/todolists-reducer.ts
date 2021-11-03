import {v1} from 'uuid';
import {FilterValuesType} from './tasks-reducer';

export type TodolistType = {
    id: string
    title: string
    filter: FilterValuesType
}

export enum TodolistEnum {
    REMOVE_TODOLIST = 'REMOVE_TODOLIST',
    ADD_TODOLIST = 'ADD_TODOLIST',
    CHANGE_TODOLIST_TITLE = 'CHANGE_TODOLIST_TITLE',
    CHANGE_TODOLIST_FILTER = 'CHANGE_TODOLIST_FILTER',
}

export type RemoveTodolistAction = {
    type: TodolistEnum.REMOVE_TODOLIST;
    payload: { todolistId: string; }
}

export type AddTodolistAction = {
    type: TodolistEnum.ADD_TODOLIST;
    payload: {
        title: string;
        todolistId: string;
    }
}

type ChangeTodolistTitleAction = {
    type: TodolistEnum.CHANGE_TODOLIST_TITLE;
    payload: {
        id: string;
        title: string;
    }
}

type ChangeTodolistFilterAction = {
    type: TodolistEnum.CHANGE_TODOLIST_FILTER;
    payload: {
        id: string;
        filter: FilterValuesType;
    }
}

type TodolistsAction =
    RemoveTodolistAction |
    AddTodolistAction |
    ChangeTodolistTitleAction |
    ChangeTodolistFilterAction

const initialState: Array<TodolistType> = []

export default function todolistsReducer(state: Array<TodolistType> = initialState, action: TodolistsAction): Array<TodolistType> {
    switch (action.type) {
        case TodolistEnum.REMOVE_TODOLIST:
            return state.filter(tl => tl.id !== action.payload.todolistId)
        case TodolistEnum.ADD_TODOLIST:
            return [{id: action.payload.todolistId, title: action.payload.title, filter: 'all'}, ...state]
        case TodolistEnum.CHANGE_TODOLIST_TITLE: {
            const todolist = state.find(tl => tl.id === action.payload.id);
            if (todolist) {
                // если нашёлся - изменим ему заголовок
                todolist.title = action.payload.title;
            }
            return [...state];
        }
        case TodolistEnum.CHANGE_TODOLIST_FILTER: {
            const todolist = state.find(tl => tl.id === action.payload.id);
            if (todolist) {
                // если нашёлся - изменим ему заголовок
                todolist.filter = action.payload.filter;
            }
            return [...state];
        }
        default:
            return state;
    }
}


export const removeTodolistAC = (todolistId: string): RemoveTodolistAction => ({
    type: TodolistEnum.REMOVE_TODOLIST,
    payload: {todolistId}
})
export const addTodolistAC = (title: string): AddTodolistAction => ({
    type: TodolistEnum.ADD_TODOLIST,
    payload: {title, todolistId: v1()}
})
export const changeTodolistTitleAC = (todolistId: string, title: string): ChangeTodolistTitleAction => ({
    type: TodolistEnum.CHANGE_TODOLIST_TITLE,
    payload: {id: todolistId, title}
})
export const changeTodolistFilterAC = (todolistId: string, filter: FilterValuesType): ChangeTodolistFilterAction => ({
    type: TodolistEnum.CHANGE_TODOLIST_FILTER,
    payload: {id: todolistId, filter}
})
