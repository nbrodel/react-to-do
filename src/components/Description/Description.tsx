import React, { FC } from 'react'

import "./Description.css"

import {TDescriptionProps} from '../../models/ComponentProps';

const Description: FC<TDescriptionProps> = ({activeTaskCount, activeImportantTaskCount}) => {
    const date = new Date();

    return (
        <div className='description'>
            <h1 className='heading'>To-do list</h1>

            <p>
                <span className='local-date essential'>Today is {date.toLocaleDateString()}</span>
                You have <span className='essential'>{activeTaskCount}</span> active task and <span className='essential'>{activeImportantTaskCount}</span> important tasks.
            </p>
        </div>
    )
}

export default Description