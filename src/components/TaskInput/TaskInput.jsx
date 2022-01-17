import React, { Component } from 'react'

import "./TaskInput.css"

class TaskInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            textInput: '',
            isImportant: false
        };        
    };

    handleSubmitTask = (e) => {
        e.preventDefault();

        const { textInput, isImportant} = this.state;
        this.props.onItemAdded(textInput, isImportant);

        this.setState({
            textInput: '',
            isImportant: false
        });
    };

    handleChangeInput = (e) => {
        this.setState({ textInput: e.target.value });
    };

    handleToggleImportant = (e) => {
        this.setState({ isImportant: e.target.checked})
    }

    render() {
        const { state, handleToggleImportant, handleChangeInput, handleSubmitTask } = this;

        const { textInput, isImportant } = state;

        return (
            <form className='task-form' onSubmit={handleSubmitTask}>
                <input
                    className='task-input'
                    placeholder='input text...'
                    onChange={handleChangeInput}
                    value={textInput}
                />
                
                <input className='important-control' type="checkbox" checked={isImportant} onChange={handleToggleImportant}/>

                <button className='btn-add'>Add</button>
            </form>
        )
    }
}

export default TaskInput
