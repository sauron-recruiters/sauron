import React from 'react'
import Info from '../pages/info'
import Home from '../pages/home'
import Learn from '../pages/learn'
import Roadmap from '../pages/roadmap'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion' //dist/framer-motion'

function AnimatedRoutes(){
  const location = useLocation()
    return  (
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="info" element={<Info />} />
            <Route path="learn" element={<Learn />} />
            <Route path="roadmap" element={<Roadmap />} />
          {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </AnimatePresence>
    )
}

export default AnimatedRoutes