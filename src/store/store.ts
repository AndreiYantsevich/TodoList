import {combineReducers, createStore} from 'redux';
import tasksReducer from './reducers/tasks-reducer';
import todolistsReducer from './reducers/todolists-reducer';

// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
const reducers = combineReducers({
    tasks: tasksReducer,
    todolists: todolistsReducer
});
// непосредственно создаём store
export const store = createStore(reducers);
// определить автоматически тип всего объекта состояния
export type RootStateType = ReturnType<typeof reducers>;
export type AppDispatch = typeof store.dispatch;

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;