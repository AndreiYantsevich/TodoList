import {applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import tasksReducer from './reducers/tasks/tasks-reducer';
import todolistsReducer from './reducers/todolist/todolist-reducer';

const rootReducer = combineReducers({
    todolist: todolistsReducer,
    tasks: tasksReducer
})

export type rootReducerType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunk))