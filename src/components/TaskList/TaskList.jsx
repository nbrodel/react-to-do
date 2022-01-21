import React, { Component, Fragment } from 'react'

import Task from '../Task/Task'
import "./TaskList.css"

import { ThemeContext } from '../../contexts/ThemeContext';

import { Loader } from '../../Loader';

const TaskLoader = Loader(Task);

class TaskList extends Component {
    render() {
        const {tasks, onToggleDone, onDeleteTask, onToggleImportant} = this.props;

        const todos = tasks.map((task) => { 
            const {id, isDone, isImportant, ...itemProps} = task;

            let classList = 'task';

            if (isImportant)
                classList += ' important'
            
            if(isDone)
                classList += ' done'

            return <ThemeContext.Consumer>{ value =>
                <div key={id} className={value + ' ' + classList}>
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
}

export default TaskList