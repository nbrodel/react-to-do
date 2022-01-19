import React, { Component, Fragment } from 'react'

import "./Task.css"

import { ThemeContext } from '../../contexts/ThemeContext';

import PropTypes from 'prop-types';

class Task extends Component {
    render() {
        const {text, date, isDone, isImportant,
               handleToogleDone, handleDeleteTask, handleToggleImportant} = this.props;

        return <ThemeContext.Consumer>{ value =>
            <Fragment>
                <input className={value + ' important-control'} type="checkbox" checked={isImportant} onChange={handleToggleImportant} />
                <input className={value + ' done-control'} type="checkbox" checked={isDone} onChange={handleToogleDone} />

                <span className='task-text'>{text}</span>

                <button className='btn edit' >✏️</button>
                <button className='btn delete' onClick={handleDeleteTask}>🗑️</button>

                <span className='date'>Created: {date}</span>
            </Fragment>
        }
        </ThemeContext.Consumer>
    }
}

Task.propTypes = {
    text: PropTypes.string,
    date: PropTypes.instanceOf(Date),
    isDone: PropTypes.bool,
    isImportant: PropTypes.bool
}

export default Task