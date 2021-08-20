import React, {ChangeEvent, useState} from 'react';
import {FilterValuesType} from './App';
import {Button} from './components/Button/Button';
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
    filter: FilterValuesType
}

export function Todolist(props: PropsType) {

    let [title, setTitle] = useState('')

    const addTaskHandler = () => {
        if (title.trim() !== '') {
            props.addTask(title, props.todolistID)
            setTitle('')
        }
    }

    const clickHandler = (filterValue: FilterValuesType) => {
        props.changeFilter(filterValue, props.todolistID)
    }

    return <div>
        <h3>{props.title}
            <button onClick={() => {
                props.deleteTodolist(props.todolistID)
            }}>x
            </button>
        </h3>
        <div className={'both'}>
            <Input title={title} setTitle={setTitle} addTask={props.addTask} todolistID={props.todolistID}/>
            <Button name={'+'} callback={addTaskHandler}/>
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
                        <span>{t.title}</span>
                        <Button name={'x'} callback={removeHandler}/>
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
