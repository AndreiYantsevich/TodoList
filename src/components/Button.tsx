import {FilterValuesType} from '../App';
import style from './Button.module.css'


type propsType = {
    name: FilterValuesType
    callback: (value: FilterValuesType, todolistID: string) => void
    todolistID: string
    filter: FilterValuesType
}

export const Button = (props: propsType) => {

    const onClickHandler = () => {
        props.callback(props.name, props.todolistID)
    }

    return(
        <button className={props.filter === props.name ? style.activeFilter : ''} onClick={onClickHandler}>{props.name}</button>
    )
}