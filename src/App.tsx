import React from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';
import {Input} from './components/Input/Input';
import {AppBar, Button, Container, Grid, IconButton, Paper, Toolbar, Typography} from '@material-ui/core';
import {Menu} from '@material-ui/icons';
import {useDispatch, useSelector } from 'react-redux';
import {rootReducerType} from './store/store';
import {FilterValuesType, TodolistType} from './store/reducers/todolist/types';
import {TaskType} from './store/reducers/tasks/types';
import {AddTaskAC, ChangeTaskStatusAC, ChangeTaskTitleAC, DeleteTaskAC} from './store/reducers/tasks/tasksAC';
import {
    AddTodolistAC,
    ChangeTodolistFilterAC,
    ChangeTodolistTitleAC,
    DeleteTodolistAC
} from './store/reducers/todolist/todolistAC';


function App() {

    let todolist = useSelector<rootReducerType, Array<TodolistType>>(state => state.todolist)
    let tasks = useSelector<rootReducerType, Array<TaskType>>(state => state.tasks)
    let dispatch = useDispatch()

    function addTask(title: string) {
        dispatch(AddTaskAC(title))
    }

    function deleteTask(id: string) {
        dispatch(DeleteTaskAC(id))
    }

    const changeTaskTitle = (title: string, id: string) => {
        dispatch(ChangeTaskTitleAC(id, title))
    }

    function changeTaskStatus(id: string, isDone: boolean) {
        dispatch(ChangeTaskStatusAC(id, isDone))
    }

    const addTodolist = (title: string) => {
        dispatch(AddTodolistAC(title))
    }

    function deleteTodolist(id: string) {
        dispatch(DeleteTodolistAC(id))
    }

    const changeTodolistTitle = (id: string, title: string) => {
        dispatch(ChangeTodolistTitleAC(id, title))
    }

    function changeTodolistFilter(value: FilterValuesType, id: string) {
        dispatch(ChangeTodolistFilterAC(id, value))
    }


    return (
        <div className="App">
            <AppBar position="static">
                <Toolbar style={{justifyContent: 'space-between'}}>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <Menu/>
                    </IconButton>
                    <Typography variant="h6">
                        Todolists
                    </Typography>
                    <Button
                        color="inherit"
                        variant={'outlined'}
                    >
                        Login
                    </Button>
                </Toolbar>
            </AppBar>
            <Container fixed>
                <Grid container style={{padding: '20px'}}>
                    <Input addTask={addTodolist}/>
                </Grid>
                <Grid
                    container
                    spacing={3}
                    style={{justifyContent: 'center'}}
                >
                    {
                        todolist.map(tl => {

                            let tasksForTodolist = tasks[tl.id];

                            if (tl.filter === 'active') {
                                tasksForTodolist = tasks[tl.id].filter(t => !t.isDone);
                            }
                            if (tl.filter === 'completed') {
                                tasksForTodolist = tasks[tl.id].filter(t => t.isDone);
                            }

                            return (
                                <Grid item key={tl.id}>
                                    <Paper elevation={10} style={{padding: '10px'}}>
                                        <Todolist
                                            key={tl.id}
                                            todolistID={tl.id}
                                            title={tl.title}
                                            tasks={tasksForTodolist}
                                            deleteTask={deleteTask}
                                            changeTodolistFilter={changeTodolistFilter}
                                            addTask={addTask}
                                            changeTaskStatus={changeTaskStatus}
                                            deleteTodolist={deleteTodolist}
                                            filter={tl.filter}
                                            changeTaskTitle={changeTaskTitle}
                                            changeTodolistTitle={changeTodolistTitle}
                                        />
                                    </Paper>
                                </Grid>
                            )
                        })}
                </Grid>
            </Container>
        </div>
    );
}

export default App;
