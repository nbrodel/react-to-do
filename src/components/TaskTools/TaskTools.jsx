import React, { Component } from 'react'

import "./TaskTools.css"

class TaskTools extends Component {
    render() {
        const {onDeleteAllTasks, onDeleteAllDoneTasks} = this.props;
        
        return (
            <div className='task-tools'>
                <button className='btn-clear' onClick={() => onDeleteAllTasks()}>Clear all tasks</button>
                <button className='btn-clear' onClick={() => onDeleteAllDoneTasks()}>Clear all done tasks</button>
            </div>
        )
    }
}

export default TaskTools