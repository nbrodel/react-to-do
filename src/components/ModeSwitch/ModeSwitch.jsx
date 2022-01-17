import React, { Component } from 'react'

import "./ModeSwitch.css"

import {doneModes, importantModes} from '../../consts/switches'

class ModeSwitch extends Component {
    render() {
        const {onChangeMode} = this.props;

        const allMode = doneModes.ALL;
        const activeMode = doneModes.ACTIVE;
        const doneMode = doneModes.DONE;
        
        const importantMode = importantModes.IMPORTANT;
        const unimportantMode = importantModes.UNIMPORTANT;

        return (
            <div className='switches'>
                <div className='switch-done'>
                    <button className='mode-all' onClick={() => onChangeMode(allMode)}>{allMode}</button>
                    <button className='mode-active' onClick={() => onChangeMode(activeMode)}>{activeMode}</button>
                    <button className='mode-done' onClick={() => onChangeMode(doneMode)}>{doneMode}</button>
                </div>
                
                <div className='switch-important'>
                    <button className='mode-important' onClick={() => onChangeMode(importantMode)}>{importantMode}</button>
                    <button className='mode-unimportant' onClick={() => onChangeMode(unimportantMode)}>{unimportantMode}</button>
                </div>
            </div>
        )
    }
}

export default ModeSwitch