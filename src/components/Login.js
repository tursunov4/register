import React, { useState } from 'react'
import http from '../axios'
import { ToastContainer } from 'react-toastify'
import { Notification } from '../plugins/Notification'
import { useNavigate } from 'react-router-dom'
export default function Login() {
  const [username , setUserName] = useState('')
  const [password , setPassword] = useState('')
  const navigate = useNavigate()
  const handeleSubmit =(e)=>{
    e.preventDefault()
    http.post('/login/', {
      username:username,
       password:password
    }).then((res) =>{
      if(res.status === 200){
       Notification({text:'Tabrik tugri login kritildi'})
      }      
    }).catch((err) =>{
      if(err.status !== 200){
        Notification({text:'hatolik bor'})
      }
    })
    setTimeout(() =>{
      navigate('/users')
    },3000)
  }
  return (
    <div className='row'>
      <ToastContainer/>
       <div className="col-md-5 offset-3">
       <div className="card mt-5">
        <div className="card-header">
          <h2>Login</h2>
        </div>
        <div className="card-body">
          <form onSubmit={handeleSubmit} id='form'>
            <input onChange={(evt)=>setUserName(evt.target.value)}  className='form-control mb-2' type="text"  placeholder='username' />
            <input  onChange={(evt)=>setPassword(evt.target.value)} className='form-control mb-2' type="password"  placeholder='password' />
          </form>
        </div>
        <div className="card-footer text-center">
          <button form='form' className='btn btn-success'>Submit</button>
        </div>
      </div>
       </div>
    </div>
  )
}
