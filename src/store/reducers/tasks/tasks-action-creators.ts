import {TasksActionEnum} from './tasks-types';


export const TasksActionCreators = {
    removeTask: (taskId: string, todolistId: string) => ({
        type: TasksActionEnum.REMOVE_TASK,
        payload: {taskId, todolistId}
    }),
    addTask: (title: string, todolistId: string) => ({
        type: TasksActionEnum.ADD_TASK,
        payload: {
            title,
            todolistId
        }
    }),
    changeTaskStatus: (taskId: string, isDone: boolean, todolistId: string) => ({
        type: TasksActionEnum.CHANGE_TASK_STATUS,
        payload: {
            taskId,
            isDone,
            todolistId
        }
    }),
    changeTaskTitle: (taskId: string, title: string, todolistId: string) => ({
        type: TasksActionEnum.CHANGE_TASK_TITLE,
        payload: {
            taskId,
            title,
            todolistId
        }
    }),
}
