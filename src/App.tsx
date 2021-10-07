import React from 'react';
import './App.css';
import {Todolist} from './components/Todolist';
import {AddItemForm} from './components/AddItemForm';
import {AppBar, Button, Container, Grid, IconButton, Paper, Toolbar, Typography} from '@material-ui/core';
import {Menu} from '@material-ui/icons';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootStateType} from './store/store';
import {FilterValuesType, TasksStateType} from './store/reducers/tasks/tasks-types';
import {TasksActions} from './store/reducers/tasks/tasks-actions';
import { TodolistType } from './store/reducers/todolists/todolists-types';
import { TodolistsActions } from './store/reducers/todolists/todolists-actions';


const App = () => {

    let todolists = useSelector<RootStateType, TodolistType[]>(state => state.todolists)
    let tasks = useSelector<RootStateType, TasksStateType>(state => state.tasks)

    const dispatch = useDispatch<AppDispatch>()

    function removeTask(id: string, todolistId: string) {
        dispatch(TasksActions.removeTask(id, todolistId))
    }

    function addTask(title: string, todolistId: string) {
        dispatch(TasksActions.addTask(title, todolistId))
    }

    function changeStatus(id: string, isDone: boolean, todolistId: string) {
        dispatch(TasksActions.changeTaskStatus(id, isDone, todolistId))
    }

    function changeTaskTitle(id: string, newTitle: string, todolistId: string) {
        dispatch(TasksActions.changeTaskTitle(id, newTitle, todolistId))
    }

    function changeFilter(value: FilterValuesType, todolistId: string) {
        dispatch(TodolistsActions.changeTodolistFilter(todolistId, value));
    }

    function removeTodolist(id: string) {
        const action = TodolistsActions.removeTodolist(id);
        dispatch(action);
    }

    function changeTodolistTitle(id: string, title: string) {
        dispatch(TodolistsActions.changeTodolistTitle(id, title));
    }

    function addTodolist(title: string) {
        const action = TodolistsActions.addTodolist(title)
        dispatch(action)
    }

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
                <Grid container style={{padding: "20px"}}>
                    <AddItemForm addItem={addTodolist}/>
                </Grid>
                <Grid container spacing={3}>
                    {
                        todolists.map(tl => {
                            let allTodolistTasks = tasks[tl.id];
                            let tasksForTodolist = allTodolistTasks;

                            if (tl.filter === "active") {
                                tasksForTodolist = allTodolistTasks.filter(t => !t.isDone);
                            }
                            if (tl.filter === "completed") {
                                tasksForTodolist = allTodolistTasks.filter(t => t.isDone);
                            }

                            return <Grid item
                                         key={tl.id}>
                                <Paper style={{padding: "10px"}}>
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
