import { ChangeEvent } from "react"
import { ITask } from "./ITask"

export type TDescriptionProps = {
    activeTaskCount: number,
    activeImportantTaskCount: number
}

export type TFilterSwitcherProps = {
    changeMode(filter: string): void
}

export type TSwitchThemeProps = {
    theme: string,
    toggleTheme(e: ChangeEvent<HTMLInputElement>): void
}

export type TTaskProps = {
    text: string,
    date: string,
    isDone: boolean,
    isImportant: boolean,
    toggleDone(): void,
    toggleImportant(): void,
    deleteTask(): void,
    changeTask(): void
}

export type TTaskInputProps = {
    addItem(textInput: string, isImportant: boolean): void
}

export type TTaskListProps = {
    tasks: ITask[],
    toggleDone(id: number): void,
    toggleImportant(id: number): void,
    deleteTask(id: number): void
    changeTask(id: number, text: string): void
}

export type TTaskToolsProps = {
    deleteAllTasks(): void,
    deleteAllDoneTasks(): void
}