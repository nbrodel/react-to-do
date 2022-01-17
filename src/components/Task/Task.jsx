import React, { Component, Fragment } from 'react'

import "./Task.css"

class Task extends Component {
    render() {
        const { text, date, isDone, isImportant, handleToogleDone, handleDeleteTask, handleToggleImportant } = this.props;

        return (
            <Fragment>
                <input className='important-control' type="checkbox" checked={isImportant} onChange={handleToggleImportant} />
                <input className='done-control' type="checkbox" checked={isDone} onChange={handleToogleDone} />

                <span className='task-text'>{text}</span>

                <button className='btn edit' >✏️</button>
                <button className='btn delete' onClick={handleDeleteTask}>🗑️</button>

                <span className='date'>Created: {date}</span>
            </Fragment>
        )
    }
}

export default Task