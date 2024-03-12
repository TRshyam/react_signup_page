import { useState } from 'react'
import {BrowserRouter,Routes,Route,useLocation } from 'react-router-dom'


import './App.css'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'

function App() {

  return (
    <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<SignIn/>}/>
          <Route path="/Signup" element={<SignUp/>}/>
        </Routes>
      
    
    </BrowserRouter>
    
  )
}

export default App
