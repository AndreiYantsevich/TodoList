import React, {useCallback} from 'react';
import './App.css';
import {Todolist} from './components/Todolist';
import {AddItemForm} from './components/AddItemForm';
import {AppBar, Button, Container, Grid, IconButton, Paper, Toolbar, Typography} from '@material-ui/core';
import {Menu} from '@material-ui/icons';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootStateType} from './store/store';
import {TodolistsActions, TodolistType} from './store/reducers/todolists-reducer';
import {FilterValuesType, TasksActions, TasksStateType} from './store/reducers/tasks-reducer';


const App = () => {

    let todolists = useSelector<RootStateType, TodolistType[]>(state => state.todolists)
    let tasks = useSelector<RootStateType, TasksStateType>(state => state.tasks)

    const dispatch = useDispatch<AppDispatch>()

    const removeTask = useCallback((id: string, todolistId: string) => {
        dispatch(TasksActions.removeTask(id, todolistId));
    }, [dispatch]);

    const addTask = useCallback((title: string, todolistId: string) => {
        dispatch(TasksActions.addTask(title, todolistId));
    }, [dispatch]);

    const changeStatus = useCallback((id: string, isDone: boolean, todolistId: string) => {
        dispatch(TasksActions.changeTaskStatus(id, isDone, todolistId));
    }, [dispatch]);

    const changeTaskTitle = useCallback((id: string, newTitle: string, todolistId: string) => {
        dispatch(TasksActions.changeTaskTitle(id, newTitle, todolistId));
    }, [dispatch]);

    const changeFilter = useCallback((value: FilterValuesType, todolistId: string) => {
        dispatch(TodolistsActions.changeTodolistFilter(todolistId, value));
    }, [dispatch]);

    const removeTodolist = useCallback((id: string) => {
        const action = TodolistsActions.removeTodolist(id);
        dispatch(action);
    }, [dispatch]);

    const changeTodolistTitle = useCallback((id: string, title: string) => {
        dispatch(TodolistsActions.changeTodolistTitle(id, title));
    }, [dispatch]);

    const addTodolist = useCallback((title: string) => {
        const action = TodolistsActions.addTodolist(title);
        dispatch(action);
    }, [dispatch]);

    return (
        <div className="App">
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <Menu/>
                    </IconButton>
                    <Typography variant="h6">
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <Container fixed>
                <Grid container style={{padding: '20px'}}>
                    <AddItemForm addItem={addTodolist}/>
                </Grid>
                <Grid container spacing={3}>
                    {
                        todolists.map(tl => {
                            let allTodolistTasks = tasks[tl.id];
                            let tasksForTodolist = allTodolistTasks;

                            return <Grid item
                                         key={tl.id}>
                                <Paper style={{padding: '10px'}}>
                                    <Todolist
                                        key={tl.id}
                                        id={tl.id}
                                        title={tl.title}
                                        tasks={tasksForTodolist}
                                        removeTask={removeTask}
                                        changeFilter={changeFilter}
                                        addTask={addTask}
                                        changeTaskStatus={changeStatus}
                                        filter={tl.filter}
                                        removeTodolist={removeTodolist}
                                        changeTaskTitle={changeTaskTitle}
                                        changeTodolistTitle={changeTodolistTitle}
                                    />
                                </Paper>
                            </Grid>
                        })
                    }
                </Grid>
            </Container>
        </div>
    );
}

export default App;
