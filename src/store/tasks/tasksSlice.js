import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: []
    },
    reducers: {
        addTask (state, action) {
            state.tasks.push(action.payload)
        },
        deleteTask (state, action) {
            const id = action.payload;
            state.tasks = state.tasks.filter(task => task.id !== id)
        },
        deleteAllTasks (state, action) {
            const emptyTasks = action.payload;
            state.tasks = emptyTasks;
        },
        deleteAllDoneTasks (state, action) {
            const tasks = action.payload;
            state.tasks = tasks.filter(task => !task.isDone)
        },
        toggleDone (state, action) {
            const id = action.payload;
            state.tasks = state.tasks.map(task => 
                task.id === id ? { ...task, isDone: !task.isDone } : task)
        },
        toggleImportant (state, action) {
            const id = action.payload;
            state.tasks = state.tasks.map(task => 
                task.id === id ? { ...task, isImportant: !task.isImportant } : task)
        }
    }
})

export const {addTask, deleteTask, deleteAllTasks, deleteAllDoneTasks, toggleDone, toggleImportant, toggleTheme, changeMode} = taskSlice.actions;

export default taskSlice.reducer;