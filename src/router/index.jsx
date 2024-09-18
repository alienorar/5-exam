import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { MainPage } from '@pages'
import {
  ModelX,
  ModelY,
  ModelS,
  ModelRd
} from '@pages'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<MainPage />}>
            <Route index element={<ModelX />} />
            <Route path='modelTwo' element={<ModelS />} />
            <Route path='modelThree' element={<ModelRd />} />
            <Route path='modelFour' element={<ModelY />} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
