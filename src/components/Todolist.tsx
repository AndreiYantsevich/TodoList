import React, {useCallback} from 'react';
import {AddItemForm} from './AddItemForm';
import {EditableSpan} from './EditableSpan';
import {Button, IconButton} from '@material-ui/core';
import {Delete} from '@material-ui/icons';
import {addTaskAC, FilterValuesType, TaskType} from '../store/reducers/tasks-reducer';
import {Task} from './Task';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootStateType} from '../store/store';

type PropsType = {
    id: string
    title: string
    changeFilter: (value: FilterValuesType, todolistId: string) => void
    removeTodolist: (id: string) => void
    changeTodolistTitle: (id: string, newTitle: string) => void
    filter: FilterValuesType
}

export const Todolist: React.FC<PropsType> = React.memo((props) => {

    const tasks = useSelector<RootStateType, Array<TaskType>>(state => state.tasks[props.id])
    const dispatch = useDispatch<AppDispatch>()

    const removeTodolist = useCallback(() => {
        props.removeTodolist(props.id);
    }, [props.removeTodolist, props.id]);

    const changeTodolistTitle = useCallback((title: string) => {
        props.changeTodolistTitle(props.id, title);
    }, [props.changeTodolistTitle, props.id]);

    const onAllClickHandler = useCallback(() => props.changeFilter('all', props.id), [props.changeFilter, props.id]);
    const onActiveClickHandler = useCallback(() => props.changeFilter('active', props.id), [props.changeFilter, props.id]);
    const onCompletedClickHandler = useCallback(() => props.changeFilter('completed', props.id), [props.changeFilter, props.id]);

    let tasksForTodolist = tasks;

    if (props.filter === 'active') {
        tasksForTodolist = tasks.filter(t => !t.isDone);
    }
    if (props.filter === 'completed') {
        tasksForTodolist = tasks.filter(t => t.isDone);
    }

    return <div>
        <h3><EditableSpan value={props.title} onChange={changeTodolistTitle}/>
            <IconButton onClick={removeTodolist}>
                <Delete/>
            </IconButton>
        </h3>
        <AddItemForm addItem={(title) => {
            dispatch(addTaskAC(title, props.id));
        }}/>
        <div>
            {
                tasksForTodolist.map(t => <Task
                    task={t}
                    todolistId={props.id}
                    key={t.id}
                />)
            }
        </div>
        <div>
            <Button variant={props.filter === 'all' ? 'outlined' : 'text'}
                    onClick={onAllClickHandler}
                    color={'default'}
            >All
            </Button>
            <Button variant={props.filter === 'active' ? 'outlined' : 'text'}
                    onClick={onActiveClickHandler}
                    color={'primary'}>Active
            </Button>
            <Button variant={props.filter === 'completed' ? 'outlined' : 'text'}
                    onClick={onCompletedClickHandler}
                    color={'secondary'}>Completed
            </Button>
        </div>
    </div>
})


