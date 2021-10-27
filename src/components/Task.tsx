import {TasksActions, TaskType} from '../store/reducers/tasks-reducer';
import React, {ChangeEvent, useCallback} from 'react';
import {Checkbox, IconButton} from '@material-ui/core';
import {EditableSpan} from './EditableSpan';
import {Delete} from '@material-ui/icons';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../store/store';

type PropsType = {
    task: TaskType
    todolistId: string
}

export const Task = React.memo((props: PropsType) => {

    const dispatch = useDispatch<AppDispatch>()

    const onClickHandler = useCallback(() => dispatch(TasksActions.removeTask(props.task.id, props.todolistId)), [props.task.id, props.todolistId]);

    const onChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        let newIsDoneValue = e.currentTarget.checked;
        dispatch(TasksActions.changeTaskStatus(props.task.id, newIsDoneValue, props.todolistId));
    }, [props.task.id, props.todolistId]);

    const onTitleChangeHandler = useCallback((newValue: string) => {
        dispatch(TasksActions.changeTaskTitle(props.task.id, newValue, props.todolistId));
    }, [props.task.id, props.todolistId]);

    return <div key={props.task.id} className={props.task.isDone ? 'is-done' : ''}>
        <Checkbox
            checked={props.task.isDone}
            color="primary"
            onChange={onChangeHandler}
        />
        <EditableSpan value={props.task.title} onChange={onTitleChangeHandler}/>
        <IconButton onClick={onClickHandler}>
            <Delete/>
        </IconButton>
    </div>
})