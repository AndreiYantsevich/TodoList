import React, {ChangeEvent} from 'react';
import {EditableSpan} from './components/EditableSpan';
import {Input} from './components/Input/Input';
import {Button, Checkbox, IconButton} from '@material-ui/core';
import {Delete} from '@material-ui/icons';
import {TaskType} from './store/reducers/tasks/types';
import {FilterValuesType} from './store/reducers/todolist/types';

type PropsType = {
    key: string
    todolistID: string
    title: string
    tasks: Array<TaskType>
    deleteTask: (id: string, todolistID: string) => void
    changeTodolistFilter: (value: FilterValuesType, todolistID: string) => void
    addTask: (title: string, todolistID: string) => void
    changeTaskStatus: (id: string, isDone: boolean, todolistID: string) => void
    deleteTodolist: (todolistID: string) => void
    changeTodolistTitle: (todolistID: string, newTitle: string) => void
    filter: FilterValuesType
    changeTaskTitle: (title: string, todolistID: string, taskID: string) => void
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
        <div>
            {
                props.tasks.map(t => {
                    const removeHandler = () => {
                        props.removeTask(t.id, props.todolistID)
                    }
                    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        props.changeTaskStatus(t.id, e.currentTarget.checked, props.todolistID);
                    }

                    return <div key={t.id} className={t.isDone ? 'is-done' : ''}>
                        <Checkbox
                            size={"small"}
                            color={"primary"}
                            checked={t.isDone}
                            onChange={onChangeHandler}
                        />
                        <EditableSpan title={t.title}
                                      callback={(title) => props.updateTask(title, props.todolistID, t.id)}/>
                        <IconButton
                            size={'small'}
                            onClick={removeHandler}>
                            <Delete/>
                        </IconButton>
                    </div>
                })
            }
        </div>
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
