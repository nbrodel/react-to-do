import React from 'react'

import "./Task.css"

import { ThemeContext } from '@contexts/ThemeContext';

import PropTypes from 'prop-types';

function Task (props) {
    const {text, date, isDone, isImportant,
           handleToogleDone, handleDeleteTask, handleToggleImportant} = props;

    return <ThemeContext.Consumer>{ value =>
        <>
            <input className={`${value} important-control`} type="checkbox" checked={isImportant} onChange={handleToggleImportant} />
            <input className={`${value} done-control`} type="checkbox" checked={isDone} onChange={handleToogleDone} />

            <span className='task-text'>{text}</span>

            <button className='btn edit' >✏️</button>
            <button className='btn delete' onClick={handleDeleteTask}>🗑️</button>

            <span className='date'>Created: {date}</span>
        </>
    }
    </ThemeContext.Consumer>
}

Task.propTypes = {
    text: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date),
    isDone: PropTypes.bool.isRequired,
    isImportant: PropTypes.bool.isRequired
}

export default Task