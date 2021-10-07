import {TodolistsAction, TodolistsActionEnum, TodolistType} from './todolists-types';


const initialState: Array<TodolistType> = []


export const todolistsReducer = (state: Array<TodolistType> = initialState, action: TodolistsAction): Array<TodolistType> => {
    switch (action.type) {
        case TodolistsActionEnum.REMOVE_TODOLIST:
            return state.filter(tl => tl.id != action.payload.todolistId)
        case TodolistsActionEnum.ADD_TODOLIST:
            return [{id: action.payload.todolistId, title: action.payload.title, filter: 'all'}, ...state]
        case TodolistsActionEnum.CHANGE_TODOLIST_TITLE: {
            const todolist = state.find(tl => tl.id === action.payload.id);
            if (todolist) {
                // если нашёлся - изменим ему заголовок
                todolist.title = action.payload.title;
            }
            return [...state]
        }
        case TodolistsActionEnum.CHANGE_TODOLIST_FILTER: {
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