import React, {ChangeEvent} from 'react';
import {FilterValuesType} from './App';
import {Button} from './components/Button/Button';
import {EditableSpan} from './components/EditableSpan';
import {Input} from './components/Input/Input';

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

    const clickHandler = (filterValue: FilterValuesType) => {
        props.changeFilter(filterValue, props.todolistID)
    }

    const deleteTodolist = () => props.deleteTodolist(props.todolistID)

    const changeTodolistTitle = (newTitle: string) => props.changeTodolistTitle(props.todolistID, newTitle)

    return <div>
        <h3>
            <EditableSpan title={props.title} callback={changeTodolistTitle} />
            <button onClick={deleteTodolist}>x
            </button>
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
                        <EditableSpan title={t.title} callback={(title) => props.updateTask(title, props.todolistID, t.id)}/>
                        <button onClick={removeHandler}>x</button>
                    </li>
                })
            }
        </ul>
        <div>
            <Button name={'all'} filter={props.filter} callback={() => clickHandler('all')}/>
            <Button name={'active'} filter={props.filter} callback={() => clickHandler('active')}/>
            <Button name={'completed'} filter={props.filter} callback={() => clickHandler('completed')}/>
        </div>
    </div>
}
