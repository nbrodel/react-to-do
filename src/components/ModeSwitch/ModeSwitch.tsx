import React from 'react'

import "./ModeSwitch.css"

import {FILTER} from '../../consts/filters'

interface Props {
    changeMode(filter: string): void
}

const ModeSwitch: React.FC<Props> = ({changeMode}) => {

    const filters = Object.values(FILTER).map((filter) => {
        const value = filter.toLowerCase();
        
        const onChangeMode = () => {
            changeMode(filter)
        }

        return <button className={`mode-${value}`} key={filter} onClick={onChangeMode}>{filter}</button>
    })

    return (  
        <div className='switches'>
            {filters}
        </div>
    )
}

export default ModeSwitch