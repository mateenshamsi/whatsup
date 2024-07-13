import React from 'react'
import { BrowserRouter as Router , Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Chat from './pages/Chat'
import Group from './pages/Group'
import Login from './pages/Login'

function App() {
  return (
    <Routes> 
      <Route path="/" element={<Home/>}/> 
      <Route path="/login" element={<Login/>}/>


    </Routes> 
  )
}

export default App
