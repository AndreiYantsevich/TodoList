import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
import {v1} from 'uuid';
import {Input} from './components/Input/Input';
import {AppBar, Button, Container, Grid, IconButton, Paper, Toolbar, Typography} from '@material-ui/core';
import {Menu} from '@material-ui/icons';


type tasksType = {
    [key: string]: Array<TaskType>
}

function App() {

    let todolistID1 = v1();
    let todolistID2 = v1();

    let [tasks, setTasks] = useState<tasksType>({
        [todolistID1]: [
            {id: v1(), title: 'HTML&CSS', isDone: true},
            {id: v1(), title: 'JS', isDone: true},
            {id: v1(), title: 'ReactJS', isDone: false},
            {id: v1(), title: 'Rest API', isDone: false},
            {id: v1(), title: 'GraphQL', isDone: false},
        ],
        [todolistID2]: [
            {id: v1(), title: 'Beer', isDone: true},
            {id: v1(), title: 'Fish', isDone: true},
            {id: v1(), title: 'Meat', isDone: false},
            {id: v1(), title: 'Milk', isDone: false},
            {id: v1(), title: 'Water', isDone: false},
        ]
    });

    function removeTask(id: string, todolistID: string) {
        setTasks({...tasks, [todolistID]: tasks[todolistID].filter(t => t.id !== id)})
    }

    function addTask(title: string, todolistID: string) {
        setTasks({...tasks, [todolistID]: [{id: v1(), title: title.trim(), isDone: false}, ...tasks[todolistID]]})
    }

    const addTodolist = (title: string) => {
        let newID = v1()
        setTodolists([{id: newID, title: title, filter: 'all'}, ...todolists])
        setTasks({...tasks, [newID]: []})
    }

    const updateTask = (title: string, todolistID: string, taskID: string) => {
        setTasks({...tasks, [todolistID]: tasks[todolistID].map(m => m.id === taskID ? {...m, title} : m)})
    }

    const changeTodolistTitle = (todolistID: string, newTitle: string) => {
        setTodolists(todolists.map(t => t.id === todolistID ? {...t, title: newTitle} : t))
    }

    function changeStatus(id: string, isDone: boolean, todolistID: string) {
        setTasks({...tasks, [todolistID]: tasks[todolistID].map(t => t.id === id ? {...t, isDone: isDone} : t)})
    }

    function changeFilter(value: FilterValuesType, todolistID: string) {
        setTodolists(todolists.map(t => t.id === todolistID ? {...t, filter: value} : t))
    }

    function deleteTodolist(todolistID: string) {
        setTodolists(todolists.filter(t => t.id !== todolistID ? delete tasks[todolistID] : '', {...tasks}))
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
                        todolists.map(tl => {

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
                                            removeTask={removeTask}
                                            changeFilter={changeFilter}
                                            addTask={addTask}
                                            changeTaskStatus={changeStatus}
                                            deleteTodolist={deleteTodolist}
                                            filter={tl.filter}
                                            updateTask={updateTask}
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
