import {changeTaskStatusAC, changeTaskTitleAC, removeTaskAC, TaskType} from '../store/reducers/tasks-reducer';
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

export const Task: React.FC<PropsType> = React.memo((props) => {

    const dispatch = useDispatch<AppDispatch>()

    const onClickHandler = useCallback(() => dispatch(removeTaskAC(props.task.id, props.todolistId)), [props.task.id, props.todolistId]);

    const onChangeStatusHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        let newIsDoneValue = e.currentTarget.checked;
        dispatch(changeTaskStatusAC(props.task.id, newIsDoneValue, props.todolistId));
    }, [props.task.id, props.todolistId]);

    const onChangeTitleHandler = useCallback((newValue: string) => {
        dispatch(changeTaskTitleAC(props.task.id, newValue, props.todolistId));
    }, [props.task.id, props.todolistId]);

    return <div key={props.task.id} className={props.task.isDone ? 'is-done' : ''}>
        <Checkbox
            checked={props.task.isDone}
            color="primary"
            onChange={onChangeStatusHandler}
        />
        <EditableSpan value={props.task.title} onChange={onChangeTitleHandler}/>
        <IconButton onClick={onClickHandler}>
            <Delete/>
        </IconButton>
    </div>
})