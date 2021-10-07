import {v1} from 'uuid';
import {
    AddTodolistAction,
    ChangeTodolistFilterAction,
    ChangeTodolistTitleAction,
    RemoveTodolistAction,
    TodolistsActionEnum
} from './todolists-types';
import {FilterValuesType} from '../tasks/tasks-types';


export const TodolistsActions = {
    removeTodolist: (todolistId: string): RemoveTodolistAction => ({type: TodolistsActionEnum.REMOVE_TODOLIST, payload:{todolistId}}),
    addTodolist: (title: string): AddTodolistAction => ({type: TodolistsActionEnum.ADD_TODOLIST, payload:{title, todolistId: v1()}}),
    changeTodolistTitle: (todolistId: string, title: string): ChangeTodolistTitleAction => ({type: TodolistsActionEnum.CHANGE_TODOLIST_TITLE, payload:{id: todolistId, title}}),
    changeTodolistFilter: (todolistId: string, filter: FilterValuesType): ChangeTodolistFilterAction => ({type: TodolistsActionEnum.CHANGE_TODOLIST_FILTER, payload:{id: todolistId, filter}})
}