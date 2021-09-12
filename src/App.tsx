import React from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {Input} from './components/Input/Input';
import {AppBar, Button, Container, Grid, IconButton, Paper, Toolbar, Typography} from '@material-ui/core';
import {Menu} from '@material-ui/icons';
import {useDispatch, useSelector} from 'react-redux';
import {rootReducerType} from './store/store';
import {TodolistStateType} from './store/reducers/todolists/types';
import {addTodolistThunk} from './store/reducers/todolists/todolistsAC';


function App() {

    const addTodolist = (title: string) => dispatch(addTodolistThunk(title))

    let dispatch = useDispatch();
    let todolist = useSelector<rootReducerType, Array<TodolistStateType>>(state => state.todolist)

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
                                            title={tl.title}
                                            filter={tl.filter}
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
