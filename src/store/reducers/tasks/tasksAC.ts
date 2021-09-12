import {AddTaskAction, ChangeTaskStatusAction, ChangeTaskTitleAction, DeleteTaskAction, TaskActionEnum} from './types';
import {Dispatch} from 'redux';

export const TaskActionCreators = {
    addTask: (title: string): AddTaskAction => ({type: TaskActionEnum.ADD_TASK, title} as const),
    changeTaskStatus: (id: string, isDone: boolean): ChangeTaskStatusAction => ({type: TaskActionEnum.CHANGE_TASK_STATUS, id, isDone}),
    changeTaskTitle: (id: string, title: string): ChangeTaskTitleAction => ({type: TaskActionEnum.CHANGE_TASK_TITLE, id, title}),
    deleteTask: (id: string): DeleteTaskAction => ({type: TaskActionEnum.DELETE_TASK, id})
}

export const addTaskThunk = (title: string) => (dispatch: Dispatch) => {
    dispatch(TaskActionCreators.addTask(title))
}
export const changeTaskStatusThunk = (id: string, isDone: boolean) => (dispatch: Dispatch) => {
    dispatch(TaskActionCreators.changeTaskStatus(id, isDone))
}
export const changeTaskTitleThunk = (id: string, title: string) => (dispatch: Dispatch) => {
    dispatch(TaskActionCreators.changeTaskTitle(id, title))
}
export const deleteTaskThunk = (id: string) => (dispatch: Dispatch) => {
    dispatch(TaskActionCreators.deleteTask(id))
}