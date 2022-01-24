import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './Header.css'

export default function Header() {
  return (
    <>
      <nav>
          <Link className='link' to='/'>Home</Link>
          <Link className='link' to='/about'>About</Link>
      </nav>
    </>
  );
}
