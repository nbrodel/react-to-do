import { ChangeEvent } from "react"
import { ITask } from "./task"

export type DescriptionProps = {
    activeTaskCount: number,
    activeImportantTaskCount: number
}

export type ModeSwitchProps = {
    changeMode(filter: string): void
}

export type SwitchThemeProps = {
    theme: string,
    toggleTheme(e: ChangeEvent<HTMLInputElement>): void
}

export type TaskProps = {
    text: string,
    date: string,
    isDone: boolean,
    isImportant: boolean,
    toggleDone(): void,
    toggleImportant(): void,
    deleteTask(): void
}

export type TaskInputProps = {
    addItem(textInput: string, isImportant: boolean): void
}

export type TaskListProps = {
    tasks: ITask[],
    toggleDone(id: number): void,
    toggleImportant(id: number): void,
    deleteTask(id: number): void
}

export type TaskToolsProps = {
    deleteAllTasks(): void,
    deleteAllDoneTasks(): void
}