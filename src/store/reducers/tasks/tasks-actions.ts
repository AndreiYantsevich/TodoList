import {
    AddTaskAction,
    ChangeTaskStatusAction,
    ChangeTaskTitleAction,
    RemoveTaskAction,
    TasksActionEnum
} from './tasks-types';


export const TasksActions = {
    removeTask: (taskId: string, todolistId: string): RemoveTaskAction => ({type: TasksActionEnum.REMOVE_TASK, payload: {taskId, todolistId}}),
    addTask: (title: string, todolistId: string): AddTaskAction => ({type: TasksActionEnum.ADD_TASK, payload: {title, todolistId}}),
    changeTaskStatus: (taskId: string, isDone: boolean, todolistId: string): ChangeTaskStatusAction => ({type: TasksActionEnum.CHANGE_TASK_STATUS, payload: {taskId, isDone, todolistId}}),
    changeTaskTitle: (taskId: string, title: string, todolistId: string): ChangeTaskTitleAction => ({type: TasksActionEnum.CHANGE_TASK_TITLE, payload: {taskId, title, todolistId}}),
}
