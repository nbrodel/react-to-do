import React, { Component, Fragment } from 'react'

import Task from '../Task/Task'
import "./TaskList.css"

class TaskList extends Component {
    render() {
        const { tasks, onToggleDone, onDeleteTask, onToggleImportant } = this.props;
        const todos = tasks.map((task) => { 
            const {id, isDone, isImportant, ...itemProps} = task;

            let classList = 'task';

            if (isImportant)
                classList += ' important'
            
            if(isDone)
                classList += ' done'

            return (
                <div key={id} className={classList}>
                    <Task
                        {...itemProps}

                        isDone={isDone}
                        isImportant={isImportant}
                        
                        handleToogleDone = {() => onToggleDone(id)}
                        handleDeleteTask = {() => onDeleteTask(id)}
                        handleToggleImportant = {() => onToggleImportant(id)}
                    />
                </div>
            )
        });
        return (
            <div className='task-list'>
                {todos}
            </div>
        )
    }
}

export default TaskList