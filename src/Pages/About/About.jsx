import React from 'react';
import Navigation from '@components/Navigation/Navigation'
import './About.css'

export default function About() {
    return (
    <div>
        <Navigation />

        <h1>About</h1>
        <div className='contact'>
            <img src={require('@assets/author.jpg')} /> <br />
            <span className='name'>nikita brodel</span>
            <a className='socials' href='https://t.me/nbrodel'>telegram</a>
            <a className='socials' href='https://github.com/nbrodel'>github</a>
        </div>
    </div>
    );
}