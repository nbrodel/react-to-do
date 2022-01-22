import React from 'react'

import "./ModeSwitch.css"

import {FILTERS} from '../../consts/switches'

function ModeSwitch (props) {
    const {onChangeMode} = props;

    const filters = Object.values(FILTERS).map((filter) => {
        const value = filter.toLowerCase();
        
        return <button className={`mode-${value}`} key={filter} onClick={() => onChangeMode(filter)}>{filter}</button>
    })

    return (  
        <div className='switches'>
            {filters}
        </div>
    )
}

export default ModeSwitch