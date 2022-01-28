import React, { FC } from 'react'

import "./Task.css"

import { ThemeContext } from '../../contexts/ThemeContext';

import { TaskProps } from '../../models/ComponentProps';

const Task: FC<TaskProps> = ({text, date, isDone, isImportant, toggleDone, deleteTask, toggleImportant}) => {
    return <ThemeContext.Consumer>{ value =>
        <>
            <input className={`${value} important-control`} type="checkbox" checked={isImportant} onChange={toggleImportant} />
            <input className={`${value} done-control`} type="checkbox" checked={isDone} onChange={toggleDone} />

            <span className='task-text'>{text}</span>

            <button className='btn edit' >✏️</button>
            <button className='btn delete' onClick={deleteTask}>🗑️</button>

            <span className='date'>Created: {date}</span>
        </>
    }
    </ThemeContext.Consumer>
}

export default Task