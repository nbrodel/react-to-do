import React, { Component } from 'react'

import "./TaskTools.css"

function TaskTools (props) {
    const {onDeleteAllTasks, onDeleteAllDoneTasks} = props;
        
    return (
        <div className='task-tools'>
            <button className='btn-clear' onClick={() => onDeleteAllTasks()}>Clear all tasks</button>
            <button className='btn-clear' onClick={() => onDeleteAllDoneTasks()}>Clear all done tasks</button>
        </div>
    )
}

export default TaskTools