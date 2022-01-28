import React, { FC } from 'react'

import "./TaskTools.css"

import { TaskToolsProps } from '../../models/ComponentProps'

const TaskTools: FC<TaskToolsProps> = ({deleteAllTasks, deleteAllDoneTasks}) => {
    
    return (
        <div className='task-tools'>
            <button className='btn-clear' onClick={() => deleteAllTasks()}>Clear all tasks</button>
            <button className='btn-clear' onClick={() => deleteAllDoneTasks()}>Clear all done tasks</button>
        </div>
    )
}

export default TaskTools