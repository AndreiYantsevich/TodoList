import {v1} from 'uuid';
import {TaskType} from '../../../components/Todolist';
import {AddTodolistActionType, RemoveTodolistActionType} from '../todolists/todolists-reducer';
import {TasksAction, TasksStateType} from './tasks-types';

const initialState: TasksStateType = {}

type ActionsType =
    AddTodolistActionType |
    RemoveTodolistActionType

export default function tasksReducer(state: TasksStateType = initialState, action: TasksAction): TasksStateType {
    switch (action.type) {
        case REMOVE_TASK:
            return {...state, [action.todolistId]: state[action.todolistId].filter(t => t.id != action.taskId)}
        case ADD_TASK :
            let newTask: TaskType = {id: v1(), title: action.title, isDone: false};
            return {...state, [action.todolistId]: [newTask, ...state[action.todolistId]]}
        case CHANGE_TASK_STATUS:
            return {
                ...state, [action.todolistId]: state[action.todolistId].map(t => t.id === action.taskId ?
                    {...t, isDone: action.isDone} : t)
            }
        case CHANGE_TASK_TITLE:
            return {
                ...state, [action.todolistId]: state[action.todolistId].map(t => t.id === action.taskId ?
                    {...t, title: action.title} : t)
            }
        case ADD_TODOLIST: {
            return {...state, [action.todolistId]: []}
        }
        case REMOVE_TODOLIST: {
            let stateCopy = {...state};
            delete stateCopy[action.todolistId]
            return stateCopy
        }
        default:
            return state;
    }
}
