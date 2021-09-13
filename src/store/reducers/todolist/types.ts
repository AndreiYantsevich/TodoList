import { AddTodolistAC, ChangeTodolistFilterAC, ChangeTodolistTitleAC, DeleteTodolistAC } from "./todolistAC";

export type FilterValuesType = 'all' | 'active' | 'completed';

export type TodolistType = {
    id: string
    title: string
    filter: FilterValuesType
}

export enum TodolistActionEnum {
    ADD_TODOLIST = "ADD_TODOLIST",
    CHANGE_TODOLIST_TITLE = "CHANGE_TODOLIST_TITLE",
    CHANGE_TODOLIST_FILTER = "CHANGE_TODOLIST_FILTER",
    DELETE_TODOLIST = "DELETE_TODOLIST"
}

export type AddTodolistACType = ReturnType<typeof AddTodolistAC>

export type ChangeTodolistTitleACType = ReturnType<typeof ChangeTodolistTitleAC>

export type ChangeTodolistFilterACType = ReturnType<typeof ChangeTodolistFilterAC>

export type DeleteTodolistACType = ReturnType<typeof DeleteTodolistAC>

export type ActionType =
    AddTodolistACType |
    ChangeTodolistTitleACType |
    ChangeTodolistFilterACType |
    DeleteTodolistACType