import React, { FC } from 'react'

import "./Description.css"

import { DescriptionProps } from '../../models/ComponentProps';

const Heading: FC<DescriptionProps> = ({activeTaskCount, activeImportantTaskCount}) => {
    const date = new Date();

    return (
        <div>
            <h1 className='heading'>To-do list</h1>

            <p className='description'>
                Today is {date.toLocaleDateString()}.
                You have {activeTaskCount} active task and {activeImportantTaskCount} important tasks.
            </p>
        </div>
    )
}

export default Heading