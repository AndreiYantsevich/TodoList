import {
    AddTodolistAction,
    ChangeTodolistFilterAction,
    ChangeTodolistTitleAction,
    DeleteTodolistAction,
    FilterValuesType,
    TodolistActionEnum
} from './types';
import {Dispatch} from 'redux';


export const TodolistActionCreators = {
    addTodolist: (title: string): AddTodolistAction => ({type: TodolistActionEnum.ADD_TODOLIST, title} as const),
    changeTodolistTitle: (todolistID: string, title: string): ChangeTodolistTitleAction => ({type: TodolistActionEnum.CHANGE_TODOLIST_TITLE, todolistID, title} as const),
    changeTodolistFilter: (todolistID: string, filter: FilterValuesType): ChangeTodolistFilterAction => ({type: TodolistActionEnum.CHANGE_TODOLIST_FILTER, todolistID, filter} as const),
    deleteTodolist: (todolistID: string): DeleteTodolistAction => ({type: TodolistActionEnum.DELETE_TODOLIST, todolistID} as const)
}

export const addTodolistThunk = (title: string) => (dispatch: Dispatch) => {
    dispatch(TodolistActionCreators.addTodolist(title))
}
export const changeTodolistTitleThunk = (todolistID: string, title: string) => (dispatch: Dispatch) => {
    dispatch(TodolistActionCreators.changeTodolistTitle(todolistID, title))
}
export const changeTodolistFilterThunk = (todolistID: string, filter: FilterValuesType) => (dispatch: Dispatch) => {
    dispatch(TodolistActionCreators.changeTodolistFilter(todolistID, filter))
}
export const deleteTodolistThunk = (todolistID: string) => (dispatch: Dispatch) => {
    dispatch(TodolistActionCreators.deleteTodolist(todolistID))
}