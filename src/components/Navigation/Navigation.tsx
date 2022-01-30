import React from 'react';
import {Link} from "react-router-dom";

import './Navigation.css'

import {ROUTEPATH} from '../../consts/routes';

export default function Header() {
  return (
      <nav>
          <Link className='link' to={ROUTEPATH.HOME}>Home</Link>
          <Link className='link' to={ROUTEPATH.ABOUT}>About</Link>
      </nav>
  );
}
