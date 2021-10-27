import React, {useCallback} from 'react';
import './App.css';
import {Todolist} from './components/Todolist';
import {AddItemForm} from './components/AddItemForm';
import {AppBar, Button, Container, Grid, IconButton, Paper, Toolbar, Typography} from '@material-ui/core';
import {Menu} from '@material-ui/icons';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootStateType} from './store/store';
import {TodolistsActions, TodolistType} from './store/reducers/todolists-reducer';
import {FilterValuesType} from './store/reducers/tasks-reducer';


const App = () => {

    const todolists = useSelector<RootStateType, Array<TodolistType>>(state => state.todolists)
    const dispatch = useDispatch<AppDispatch>()

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

                            return <Grid item
                                         key={tl.id}>
                                <Paper style={{padding: '10px'}}>
                                    <Todolist
                                        key={tl.id}
                                        id={tl.id}
                                        title={tl.title}
                                        changeFilter={changeFilter}
                                        filter={tl.filter}
                                        removeTodolist={removeTodolist}
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
