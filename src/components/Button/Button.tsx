import {FilterValuesType} from '../../App';
import style from './Button.module.css'


type propsType = {
    name: string
    callback: () => void
    filter?: FilterValuesType
}

export const Button = (props: propsType) => {

    const onClickHandler = () => {
        props.callback()
    }

    return (
        <button className={props.filter === props.name ? style.activeFilter : ''} onClick={onClickHandler}>{props.name}</button>
    )
}