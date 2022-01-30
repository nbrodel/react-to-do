import React from 'react';
import Navigation from '../../components/Navigation/Navigation';

import './NotFound.css'

export default function NotFound() {
  return (
    <>
        <Navigation />
        <div className='not-found'>
          <h1 className='not-found-text'>404 Page not found</h1>
          <img src={require('../../assets/scarecrow.png')} alt='404' className='scarecrow'/>
        </div>
    </>
  );
}
