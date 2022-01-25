import React, { useState } from 'react'

import "./TaskInput.css"

import { ThemeContext } from '../../contexts/ThemeContext';

function TaskInput (props) {
    const [textInput, setTextInput] = useState('');
    const [isImportant, setImportant] = useState(false);

    const {onItemAdded} = props;

    const handleSubmitTask = (e) => {
        e.preventDefault();
        
        onItemAdded(textInput, isImportant);
        
        setTextInput('');
        setImportant(false);
    };

    const handleChangeInput = (e) => {
        setTextInput(e.target.value)
    };

    const handleToggleImportant = (e) => {
        setImportant(e.target.checked)
    }

    return <ThemeContext.Consumer>{ value =>
        <form className='task-form' onSubmit={handleSubmitTask}>
            <input
                className='task-input'
                placeholder='input text...'
                onChange={handleChangeInput}
                value={textInput}
            />
            
            <input 
                className={`${value} important-control`}
                type="checkbox" 
                onChange={handleToggleImportant}
                checked={isImportant}
            />

            <button className='btn-add'>Add</button>
        </form>
    }
    </ThemeContext.Consumer>
}

export default TaskInput
