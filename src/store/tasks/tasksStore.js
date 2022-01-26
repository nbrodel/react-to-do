import {makeAutoObservable} from 'mobx'

class TasksStore {
    tasks = [];

    constructor() {
        makeAutoObservable(this);
    }

    addTask = (task) => {
        this.tasks = [...this.tasks, ...task]
    }
    deleteTask = (id) => {
        this.tasks = this.tasks.filter(task => task.id !== id)
    }
    deleteAllTasks = (emptyTasks) => { this.tasks = emptyTasks}
    deleteAllDoneTasks = () => {
        this.tasks = this.tasks.filter(task => !task.isDone)
    }
    toggleDone = (id) => {
        this.tasks = this.tasks.map(task => 
            task.id === id ? { ...task, isDone: !task.isDone } : task)
    }
    toggleImportant = (id) => {
        this.tasks = this.tasks.map(task => 
            task.id === id ? { ...task, isImportant: !task.isImportant } : task)
    }
}

export default new TasksStore();