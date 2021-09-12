
export type FilterValuesType = 'all' | 'active' | 'completed';

export type TodolistStateType = {
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

export interface AddTodolistAction {
    type: TodolistActionEnum.ADD_TODOLIST;
    title: string
}
export interface ChangeTodolistTitleAction {
    type: TodolistActionEnum.CHANGE_TODOLIST_TITLE;
    id: string
    title: string
}
export interface ChangeTodolistFilterAction {
    type: TodolistActionEnum.CHANGE_TODOLIST_FILTER;
    id: string
    filter: FilterValuesType
}
export interface DeleteTodolistAction {
    type: TodolistActionEnum.DELETE_TODOLIST;
    id: string
}

export type TodolistAction =
    AddTodolistAction |
    ChangeTodolistTitleAction |
    ChangeTodolistFilterAction |
    DeleteTodolistAction