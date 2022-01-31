import React, {FC} from 'react'

import "./Task.css"

import {ThemeContext} from '../../contexts/ThemeContext';

import {TTaskProps} from '../../models/ComponentProps';

const Task: FC<TTaskProps> = ({text, date, isDone, isImportant, toggleDone, deleteTask, toggleImportant, changeTask}) => {
    return <ThemeContext.Consumer>{ value =>
        <>
            <input className={`${value} important-control`} type="checkbox" checked={isImportant} onChange={toggleImportant} />
            <input className={`${value} done-control`} type="checkbox" checked={isDone} onChange={toggleDone} />

            <span className='task-text'>{text}</span>

            <button className='btn edit' onClick={changeTask}><span>✏️</span></button>
            
            <button className='btn delete' onClick={deleteTask}><span>🗑️</span></button>

            <span className='date'>Created: {date}</span>
        </>
    }
    </ThemeContext.Consumer>
}

export default Task