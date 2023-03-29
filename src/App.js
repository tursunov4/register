import React from 'react'
import Register from './components/Register'
import { Route,Routes } from 'react-router-dom'
import Login from './components/Login'
import Users from './components/Users'

export default function App() {
  return (
    <div className='container'>
      
      <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='/users' element={<Users/>}/>
      </Routes>
    </div>
  )
}
