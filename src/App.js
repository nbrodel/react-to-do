import React from 'react'
import { Routes, Route, Link } from "react-router-dom"

import About from './Pages/About/About'
import Home from './Pages/Home/Home'
import NotFound from './Pages/NotFound/NotFound'

import {ROUTEPATH} from './consts/routes'

function App () {
  return (
    <div className="app">
      <Routes>
        <Route path={ROUTEPATH.NOTFOUND} element={<NotFound />} />

        <Route path={ROUTEPATH.HOME} element={<Home />} />
        <Route path={ROUTEPATH.ABOUT} element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
