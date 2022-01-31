import React from 'react';
import {Link} from "react-router-dom";

import './Navigation.css'

export default function Header() {
  return (
      <nav>
          <Link className='link' to='/'>Home</Link>
          <Link className='link' to='/about'>About</Link>
      </nav>
  );
}
