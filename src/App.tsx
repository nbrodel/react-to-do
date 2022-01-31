import React from 'react'
import { Routes, Route } from "react-router-dom"

import About from './pages/About/About'
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound/NotFound'

import {ROUTE_PATH} from './consts/routes'

function App () {
  return (
    <div className="app">
      <Routes>
        <Route path={ROUTE_PATH.NOTFOUND} element={<NotFound />} />

        <Route path={ROUTE_PATH.HOME} element={<Home />} />
        <Route path={ROUTE_PATH.ABOUT} element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
