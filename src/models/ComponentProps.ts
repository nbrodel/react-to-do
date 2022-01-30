import { ChangeEvent } from "react"
import { ITask } from "./ITask"

export type DescriptionProps = {
    activeTaskCount: number,
    activeImportantTaskCount: number
}

export type FilterSwitcherProps = {
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
    deleteTask(): void,
    changeTask(): void
}

export type TaskInputProps = {
    addItem(textInput: string, isImportant: boolean): void
}

export type TaskListProps = {
    tasks: ITask[],
    toggleDone(id: number): void,
    toggleImportant(id: number): void,
    deleteTask(id: number): void
    changeTask(id: number, text: string): void
}

export type TaskToolsProps = {
    deleteAllTasks(): void,
    deleteAllDoneTasks(): void
}