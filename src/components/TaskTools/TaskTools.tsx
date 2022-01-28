import React, { FC } from 'react'

import "./TaskTools.css"

interface Props {
    deleteAllTasks(): void,
    deleteAllDoneTasks(): void
}

const TaskTools: FC<Props> = ({deleteAllTasks, deleteAllDoneTasks}) => {
    
    return (
        <div className='task-tools'>
            <button className='btn-clear' onClick={() => deleteAllTasks()}>Clear all tasks</button>
            <button className='btn-clear' onClick={() => deleteAllDoneTasks()}>Clear all done tasks</button>
        </div>
    )
}

export default TaskTools