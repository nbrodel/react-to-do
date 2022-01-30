import React from 'react';
import Navigation from '../../components/Navigation/Navigation'
import './About.css'

export default function About() {
    return (
    <div>
        <Navigation />

        <div className='contact'>
            <h1 className='about'>About</h1>
            <img className='author-photo' src={require('../../assets/author.png')} alt='author photo' /> <br />
            <span className='author-name'>nikita brodel</span> <br />
            
            <div className='socials'>
                <a className='social-tg' href='https://t.me/nbrodel'>telegram</a>
                <a className='social-git' href='https://github.com/nbrodel'>github</a>
            </div>

            <ul className='exposition'>On this course I create simple to-do app and learned:
                <li>use class components</li>
                <li>add context</li>
                <li>apply HOC</li>
                <li>append propTypes</li>
                <li>use hooks and functional components</li>
                <li>make routing for other pages</li>
                <li>create global store with architectural approach Flux</li>
                <li>use redux-toolkit and mobx</li>
                <li>typing components with typescript</li>
            </ul>
        </div>
    </div>
    );
}