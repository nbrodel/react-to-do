import React, {useState} from 'react'

import "./FilterSwitcher.css"

import {FILTER} from '../../consts/filters'

import {FilterSwitcherProps} from '../../models/ComponentProps'

const FilterSwitcher: React.FC<FilterSwitcherProps> = ({changeMode}) => {
    const [activeFilter, setActiveFilter] = useState<string | undefined>(FILTER.ALL);

    const filters = Object.values(FILTER).map((filter) => {
        const value = filter.toLowerCase();

        const onChangeMode = () => {
            changeMode(filter)
            setActiveFilter(filter)
        }

        return <button className={`mode-${value}`} key={filter} onClick={onChangeMode}>{filter}</button>
    })

    return (  
        <div className='switches'>
            {filters}
            <span className='active-filter'>{activeFilter} tasks</span>
        </div>
    )
}

export default FilterSwitcher