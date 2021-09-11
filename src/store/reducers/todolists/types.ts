
export type FilterValuesType = 'all' | 'active' | 'completed';

export type TodolistState = {
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
    todolistID: string
    title: string
}
export interface ChangeTodolistFilterAction {
    type: TodolistActionEnum.CHANGE_TODOLIST_FILTER;
    todolistID: string
    value: FilterValuesType
}
export interface DeleteTodolistAction {
    type: TodolistActionEnum.DELETE_TODOLIST;
    todolistID: string
}

export type TodolistAction =
    AddTodolistAction |
    ChangeTodolistTitleAction |
    ChangeTodolistFilterAction |
    DeleteTodolistAction