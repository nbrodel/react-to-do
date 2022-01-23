import React, {useState} from 'react'
import { Routes, Route, Link } from "react-router-dom"

import About from './components/About/About'
import Home from './components/Home/Home'

function App () {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
