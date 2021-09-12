import React, {ChangeEvent} from 'react';
import {EditableSpan} from './components/EditableSpan';
import {Input} from './components/Input/Input';
import {Button, Checkbox, IconButton} from '@material-ui/core';
import {Delete} from '@material-ui/icons';
import {FilterValuesType, TodolistStateType} from './store/reducers/todolists/types';
import {
    changeTodolistFilterThunk,
    changeTodolistTitleThunk,
    deleteTodolistThunk
} from './store/reducers/todolists/todolistsAC';
import {useDispatch, useSelector} from 'react-redux';
import {rootReducerType} from './store/store';
import {TaskStateType} from './store/reducers/tasks/types';

type PropsType = {
    key: string
    title: string
    filter: FilterValuesType
}

export function Todolist(props: PropsType) {

    const setAllFilterValue = () => dispatch(changeTodolistFilterThunk(props.todolistID, 'all'))
    const setActiveFilterValue = () => dispatch(changeTodolistFilterThunk(props.todolistID, 'active'))
    const setCompletedFilterValue = () => dispatch(changeTodolistFilterThunk(props.todolistID, 'completed'))
    const deleteTodolist = () => dispatch(deleteTodolistThunk(props.todolistID))
    const changeTodolistTitle = (title: string) => dispatch(changeTodolistTitleThunk(props.todolistID, title))

    let dispatch = useDispatch();
    let tasks = useSelector<rootReducerType, Array<TaskStateType>>(state => state.tasks)

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
            <Input/>
        </div>
        <div>
            {
                tasks.map(t => {
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
}
