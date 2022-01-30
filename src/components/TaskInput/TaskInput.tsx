import React, {ChangeEvent, FC, FormEvent, useState} from 'react'

import "./TaskInput.css"

import {ThemeContext} from '../../contexts/ThemeContext';

import {TaskInputProps} from '../../models/ComponentProps';

const TaskInput: FC<TaskInputProps> = ({addItem}) => {
    const [textInput, setTextInput] = useState<string>('');
    const [isImportant, setImportant] = useState<boolean>(false);

    const handleSubmitTask = (e: FormEvent) => {
        e.preventDefault();
        
        addItem(textInput, isImportant);
        
        setTextInput('');
        setImportant(false);
    };

    const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setTextInput(e.target.value)
    };

    const handleToggleImportant = (e: ChangeEvent<HTMLInputElement>) => {
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
                className={`${value} important-control-form`}
                type="checkbox" 
                onChange={handleToggleImportant}
                checked={isImportant}
            />

            <button className='btn-add'><span>Add</span></button>
        </form>
    }
    </ThemeContext.Consumer>
}

export default TaskInput
