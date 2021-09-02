import React, {ChangeEvent} from 'react';
import {FilterValuesType} from './App';
import {EditableSpan} from './components/EditableSpan';
import {Input} from './components/Input/Input';
import {Button, IconButton} from '@material-ui/core';
import {Delete} from '@material-ui/icons';

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    key: string
    todolistID: string
    title: string
    tasks: Array<TaskType>
    removeTask: (id: string, todolistID: string) => void
    changeFilter: (value: FilterValuesType, todolistID: string) => void
    addTask: (title: string, todolistID: string) => void
    changeTaskStatus: (id: string, isDone: boolean, todolistID: string) => void
    deleteTodolist: (todolistID: string) => void
    changeTodolistTitle: (todolistID: string, newTitle: string) => void
    filter: FilterValuesType
    updateTask: (title: string, todolistID: string, taskID: string) => void
}

export function Todolist(props: PropsType) {

    const setAllFilterValue = () => props.changeFilter('all', props.todolistID)
    const setActiveFilterValue = () => props.changeFilter('active', props.todolistID)
    const setCompletedFilterValue = () => props.changeFilter('completed', props.todolistID)
    const deleteTodolist = () => props.deleteTodolist(props.todolistID)
    const changeTodolistTitle = (newTitle: string) => props.changeTodolistTitle(props.todolistID, newTitle)

    return <div>
        <h3>
            <EditableSpan title={props.title} callback={changeTodolistTitle}/>
            <IconButton
                size={'small'}
                onClick={deleteTodolist}>
                <Delete/>
            </IconButton>
        </h3>
        <div className={'both'}>
            <Input addTask={(title) => props.addTask(title, props.todolistID)}/>
        </div>
        <ul>
            {
                props.tasks.map(t => {
                    const removeHandler = () => {
                        props.removeTask(t.id, props.todolistID)
                    }
                    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        props.changeTaskStatus(t.id, e.currentTarget.checked, props.todolistID);
                    }

                    return <li key={t.id} className={t.isDone ? 'is-done' : ''}>
                        <input type="checkbox"
                               onChange={onChangeHandler}
                               checked={t.isDone}/>
                        <EditableSpan title={t.title}
                                      callback={(title) => props.updateTask(title, props.todolistID, t.id)}/>
                        <IconButton
                            size={'small'}
                            onClick={removeHandler}>
                            <Delete/>
                        </IconButton>
                    </li>
                })
            }
        </ul>
        <div>
            <Button
                size={'small'}
                variant={'contained'}
                color={props.filter === 'all' ? 'secondary' : 'primary'}
                // className={allBtnClass}
                onClick={setAllFilterValue}
            >All
            </Button>
            <Button
                size={'small'}
                variant={'contained'}
                color={props.filter === 'active' ? 'secondary' : 'primary'}
                // className={activeBtnClass}
                onClick={setActiveFilterValue}
                style={{margin: '0 3px'}}
            >Active
            </Button>
            <Button
                size={'small'}
                variant={'contained'}
                color={props.filter === 'completed' ? 'secondary' : 'primary'}
                // className={completedBtnClass}
                onClick={setCompletedFilterValue}
            >Completed
            </Button>
        </div>
    </div>
}
