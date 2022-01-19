import React, { Component } from 'react'

import "./Heading.css"

import PropTypes from 'prop-types';

class Heading extends Component {
    constructor(props) {
        super(props);

        this.state = {
            date: new Date()
        }
    }

    render() {
        const {date} = this.state;
        const {activeTaskCount, activeImportantTaskCount} = this.props;

        return (
            <header>
                <h1 className='heading'>To-do app</h1>

                <p className='description'>Today is {date.toLocaleDateString()}.
                    You have {activeTaskCount} active task and {activeImportantTaskCount} important tasks.</p>
            </header>
        )
    }
}

Heading.propTypes = {
    date: PropTypes.instanceOf(Date)
}

export default Heading