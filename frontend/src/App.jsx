import React from 'react'
import { BrowserRouter as Router , Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Chat from './pages/Chat'
import Group from './pages/Group'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  return (
    <Routes> 
      <Route path="/" element={<Home/>}/> 
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>

    </Routes> 
  )
}

export default App
