import React from 'react';
import {AddItemForm} from '../components/AddItemForm';
import {action} from '@storybook/addon-actions';


export default {
    title: 'AddItemForm Component',
    component: AddItemForm
}

const callback = action("Button add")

export const AddItemFormBaseExample = (props: any) => {
    return <AddItemForm addItem={callback}/>
}