import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {RootState} from './store'
import {ITask} from '../../models/task'

interface TasksSliceState {
    tasks: ITask[]
}

const initialState: TasksSliceState = {
    tasks: []
}

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask (state, action: PayloadAction<ITask>) {
            const taskText = action.payload.text;
            const isImportant = action.payload.isImportant;
            state.tasks = [
                ...state.tasks,
                {
                    id: Math.random(),
                    text: taskText,
                    isDone: false,
                    isImportant: isImportant && true,
                    date: new Date().toLocaleString()
                },
            ];
        },
        deleteTask (state, action: PayloadAction<number>) {
            const id = action.payload;
            state.tasks = state.tasks.filter(task => task.id !== id);
        },
        deleteAllTasks (state, action) {
            const emptyTasks = action.payload;
            state.tasks = emptyTasks;
        },
        deleteAllDoneTasks (state) {
            state.tasks = state.tasks.filter(task => !task.isDone)
        },
        toggleDone (state, action: PayloadAction<number>) {
            const id = action.payload;
            state.tasks = state.tasks.map(task => 
                task.id === id ? { ...task, isDone: !task.isDone } : task)
        },
        toggleImportant (state, action: PayloadAction<number>) {
            const id = action.payload;
            state.tasks = state.tasks.map(task => 
                task.id === id ? { ...task, isImportant: !task.isImportant } : task)
        }
    }
})

export const selectTasks = (state: RootState) => state.tasks.tasks;

export const {addTask, deleteTask, deleteAllTasks, deleteAllDoneTasks, toggleDone, toggleImportant} = taskSlice.actions;

export default taskSlice.reducer;