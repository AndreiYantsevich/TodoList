import {applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import todolistsReducer from './reducers/todolists/todolists-reducer';
import tasksReducer from './reducers/tasks/tasks-reducer';

const rootReducer = combineReducers({
    todolist: todolistsReducer,
    tasks: tasksReducer
})

export type rootReducerType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunk))

