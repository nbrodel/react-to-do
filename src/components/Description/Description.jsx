import React, { useState } from 'react'

import "./Description.css"

import PropTypes from 'prop-types';

function Heading (props) {
    const [date] = useState(new Date());

    const {activeTaskCount, activeImportantTaskCount} = props;

    return (
        <header>
            <h1 className='heading'>To-do app</h1>

            <p className='description'>
                Today is {date.toLocaleDateString()}.
                You have {activeTaskCount} active task and {activeImportantTaskCount} important tasks.</p>
        </header>
    )
}

Heading.propTypes = {
    date: PropTypes.instanceOf(Date)
}

export default Heading