import React from 'react'

import Task from '../Task/Task'
import "./TaskList.css"

import cn from 'classnames';

import {ThemeContext} from '../../contexts/ThemeContext';

import {TTaskListProps} from '../../models/ComponentProps';

const TaskList: React.FC<TTaskListProps> = ({tasks, toggleDone, toggleImportant, deleteTask, changeTask}) => {

    if(!tasks.length) return <p>No tasks yet. Enjoy your life!</p>

    const todos = tasks.map((task) => {
        const {id, isDone, isImportant, text, ...itemProps} = task;

        return <ThemeContext.Consumer>{ value =>
            <div key={id} className={`${value} ${cn('task', {'important': isImportant}, {'done': isDone})}`}>
                <Task
                    {...itemProps}   
                    isDone={isDone}
                    isImportant={isImportant}
                    text={text}
                    
                    toggleDone = {() => toggleDone(id)}
                    toggleImportant = {() => toggleImportant(id)}
                    deleteTask = {() => deleteTask(id)}
                    changeTask = {() => changeTask(id, text)}
                />
            </div>
            }
        </ThemeContext.Consumer>
    });
    
    return (
        <div>
            {todos}
        </div>
    )
}

export default TaskList