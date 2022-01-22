import React from 'react'

import Task from '../Task/Task'
import "./TaskList.css"

import cn from 'classnames';

import { ThemeContext } from '../../contexts/ThemeContext';

import { Loader } from '../../Loader';

import PropTypes from 'prop-types';

const TaskLoader = Loader(Task);

function TaskList (props) {
    const {tasks, onToggleDone, onDeleteTask, onToggleImportant} = props;

    const todos = tasks.map((task) => { 
        const {id, isDone, isImportant, ...itemProps} = task;

        return <ThemeContext.Consumer>{ value =>
            <div key={id} className={`${value} ${cn('task', {'important': isImportant}, {'done': isDone})}`}>
                <TaskLoader
                    {...itemProps}

                    isDone={isDone}
                    isImportant={isImportant}
                    
                    handleToogleDone = {() => onToggleDone(id)}
                    handleDeleteTask = {() => onDeleteTask(id)}
                    handleToggleImportant = {() => onToggleImportant(id)}
                />
            </div>
            }
        </ThemeContext.Consumer>  
    });
    
    return (
        <div className='task-list'>
            {todos}
        </div>
    )
}

TaskList.propTypes = {
    id: PropTypes.number.isRequired,
    isDone: PropTypes.bool.isRequired,
    isImportant: PropTypes.bool.isRequired
}

export default TaskList