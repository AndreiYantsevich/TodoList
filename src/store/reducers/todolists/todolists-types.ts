import { FilterValuesType } from "../tasks/tasks-types";

export type TodolistType = {
    id: string
    title: string
    filter: FilterValuesType
}

export enum TodolistsActionEnum {
    REMOVE_TODOLIST = 'REMOVE_TODOLIST',
    ADD_TODOLIST = 'ADD_TODOLIST',
    CHANGE_TODOLIST_TITLE = 'CHANGE_TODOLIST_TITLE',
    CHANGE_TODOLIST_FILTER = 'CHANGE_TODOLIST_FILTER',
}

export interface RemoveTodolistAction {
    type: TodolistsActionEnum.REMOVE_TODOLIST;
    payload: {todolistId: string;}
}

export interface AddTodolistAction {
    type: TodolistsActionEnum.ADD_TODOLIST;
    payload: {
        title: string;
        todolistId: string;
    }
}

export interface ChangeTodolistTitleAction {
    type: TodolistsActionEnum.CHANGE_TODOLIST_TITLE;
    payload: {
        id: string;
        title: string;
    }
}

export interface ChangeTodolistFilterAction {
    type: TodolistsActionEnum.CHANGE_TODOLIST_FILTER;
    payload: {
        id: string;
        filter: FilterValuesType;
    }
}

export type TodolistsAction =
    RemoveTodolistAction |
    AddTodolistAction |
    ChangeTodolistTitleAction |
    ChangeTodolistFilterAction