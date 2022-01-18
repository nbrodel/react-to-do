import React, { Component } from 'react'

import "./ModeSwitch.css"

import {FILTERS} from '../../consts/switches'

class ModeSwitch extends Component {
    render() {
        const {onChangeMode} = this.props;

        const filters = Object.values(FILTERS).map((filter) => {
            const value = filter.toLowerCase();
            
            return <button className={`mode-${value}`} onClick={() => onChangeMode(filter)}>{filter}</button>
          })

        return (
            
            <div className='switches'>
                {filters}
            </div>
        )
    }
}

export default ModeSwitch