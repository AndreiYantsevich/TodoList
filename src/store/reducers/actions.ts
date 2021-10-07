import {TasksActions} from './tasks/tasks-actions';
import { TodolistsActions } from './todolists/todolists-actions';


export const allActionCreators = {
    ...TasksActions,
    ...TodolistsActions
}