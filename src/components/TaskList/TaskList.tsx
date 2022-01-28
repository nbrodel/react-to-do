import React from 'react'

import Task from '../Task/Task'
import "./TaskList.css"

import cn from 'classnames';

import { ThemeContext } from '../../contexts/ThemeContext';

/* import { Loader } from '../../Loader'; */

import {ITask} from '../../models/task'

/* const TaskLoader = Loader(Task); */

interface TaskProps {
    tasks: ITask[],
    toggleDone(id: number): void,
    toggleImportant(id: number): void,
    deleteTask(id: number): void
}

const TaskList: React.FC<TaskProps> = ({tasks, toggleDone, toggleImportant, deleteTask}) => {
    if(!tasks.length)
    {
        return <p>дел нет</p>
    }

    const todos = tasks.map((task: ITask) => {
        const {id, isDone, isImportant, ...itemProps} = task;

        return <ThemeContext.Consumer>{ value =>
            <div key={id} className={`${value} ${cn('task', {'important': isImportant}, {'done': isDone})}`}>
                <Task
                    {...itemProps}
                        
                    isDone={isDone}
                    isImportant={isImportant}
                    
                    toggleDone = {() => toggleDone(id)}
                    deleteTask = {() => deleteTask(id)}
                    toggleImportant = {() => toggleImportant(id)}
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

export default TaskList