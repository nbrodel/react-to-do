import React from 'react';
import {Link} from "react-router-dom";

import './Navigation.css'

import {ROUTE_PATH} from '../../consts/routes';

export default function Header() {
  return (
      <nav>
          <Link className='link' to={ROUTE_PATH.HOME}>Home</Link>
          <Link className='link' to={ROUTE_PATH.ABOUT}>About</Link>
      </nav>
  );
}
