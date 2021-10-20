
import {TodolistsActions} from '../reducers/todolists/todolists-actions';
import tasksReducer from '../reducers/tasks/tasks-reducer';
import todolistsReducer from '../reducers/todolists/todolists-reducer';
import { TasksStateType } from '../reducers/tasks/tasks-types';
import { TodolistType } from '../reducers/todolists/todolists-types';


test('ids should be equals', () => {
    const startTasksState: TasksStateType = {};
    const startTodolistsState: Array<TodolistType> = [];

    const action = TodolistsActions.addTodolist("new todolist");

    const endTasksState = tasksReducer(startTasksState, action)
    const endTodolistsState = todolistsReducer(startTodolistsState, action)

    const keys = Object.keys(endTasksState);
    const idFromTasks = keys[0];
    const idFromTodolists = endTodolistsState[0].id;

    expect(idFromTasks).toBe(action.payload.todolistId);
    expect(idFromTodolists).toBe(action.payload.todolistId);
});
