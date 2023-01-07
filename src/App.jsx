import React from 'react'
import "./CustomTheme.scss"
import Home from './pages/Home'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ModalA, ModalB } from './components/modals'

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/modalA' element={<ModalA/>}/>
        <Route path='/modalB' element={<ModalB/>}/>
      </Routes>
    </Router>
  )
}


export default App