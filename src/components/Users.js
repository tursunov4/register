import React, { useEffect, useState } from 'react'
import http from '../axios'
import ReactModal from 'react-modal'
function Users() {
  const [users , setUsers ] = useState([])
  
  const [username , setUsername] =  useState('')
  const [firstname , setFirstname] =  useState('')
  const [lastname , setLastname] =  useState('')
  const [age , setAge] =  useState('')
  const [email , setEmail] =  useState('')
  const [address , setAddress] =  useState('')
  const [number , setNumber] =  useState('')
  
  const [username2 , setUsername2] =  useState('')
  const [firstname2 , setFirstname2] =  useState('')
  const [lastname2 , setLastname2] =  useState('')
  const [age2 , setAge2] =  useState('')
  const [email2 , setEmail2] =  useState('')
  const [address2 , setAddress2] =  useState('')
  const [number2 , setNumber2] =  useState('')
  const [open, setOpen] = useState(false)
  const [open2, setOpen2] = useState(false)
  const [id ,setId] = useState('')
    useEffect(()=>{
      http.get('/user/' , {
        headers : {
          'Authorization': 'Basic YWRtaW46MTIz'
        }
      }).then((res) =>{
        setUsers(res.data)
      })
      console.log(users);
    },[])
    const handleSave =(e) =>{
      window.location.reload()
      e.preventDefault()
      setOpen(false)
      http.post('/user/' , {
        username:username,
        last_name : lastname,
        first_name : firstname,
        age: age,
        email: email,
        phone_number : number,
        address : address,
      }).then((res) =>{
        console.log(res);
      })
    }
    const Deleted =(id)=>{
     
      console.log(id);
    http.delete(`/user/${id}/`,{
      headers : {
        'Authorization': 'Basic YWRtaW46MTIz'
      }
    }).then((res) => {console.log(res);})
     setTimeout(() => {
      window.location.reload()
     }, 300);
    }
    const editUser =(id , username, firsname, lastname, age,email,address, number) =>{
      setOpen2(true)
       setId(id)
       setUsername2(username)
       setFirstname2(firsname)
       setLastname2(lastname)
       setAddress2(address)
       setAge2(age)
       setEmail2(email)
       setNumber2(number)
    } 
    const handleEditsave =()=>{
      window.location.reload()
      setOpen2(false)
      http.put(`user/${id}/`,{
        headers : {
          'Authorization': 'Basic YWRtaW46MTIz'
        },
        username: username2, 
        first_name:firstname2,
        last_name : lastname2,
        age:age2,
        email:email2,
        address:address2,
        phone_number:number2
      }).then((res) => {
        console.log(res);
      })
    }
  return (
    <div>
      <ReactModal onRequestClose={()=>setOpen(false)} isOpen={open} style ={
        {
          overlay :{
            background: 'rgba(0,0,0,0.4)'
          },
        content:{
         width :"500px",
         padding :'20px',
         margin:"0 auto"
        }
      }    }  
      >
        <form onSubmit={handleSave} id='formt'>
           <input onChange={ (e) =>setUsername(e.target.value)} className='form-control my-2' type="text" placeholder='eter your username' />
           <input onChange={ (e) =>setFirstname(e.target.value)} className='form-control my-2' type="text" placeholder='eter your firsname' />
           <input onChange={ (e) =>setLastname(e.target.value)} className='form-control my-2' type="text" placeholder='eter your lastname' />
           <input onChange={ (e) =>setAge(e.target.value)} className='form-control my-2' type="number" placeholder='eter your age' />
           <input onChange={ (e) =>setEmail(e.target.value)} className='form-control my-2' type="email" placeholder='eter your email' />
           <input  onChange={ (e) =>setAddress(e.target.value)} className='form-control my-2' type="address" placeholder='eter your address' />
           <input  onChange={ (e) =>setNumber(e.target.value)} className='form-control my-2' type="number" placeholder='eter your Phone number' />
        </form>
        <button form='formt'>Save</button>
      </ReactModal>
      <ReactModal onRequestClose={()=>setOpen2(false)} isOpen={open2} style ={
        {
          overlay :{
            background: 'rgba(0,0,0,0.4)'
          },
        content:{
         width :"500px",
         padding :'20px',
         margin:"0 auto"
        }
      }    }  
      >
        <form onSubmit={handleEditsave} id='formtt'>
           <input value={username2} onChange={ (e) =>setUsername2(e.target.value)} className='form-control my-2' type="text" placeholder='eter your username' />
           <input value={firstname2} onChange={ (e) =>setFirstname2(e.target.value)} className='form-control my-2' type="text" placeholder='eter your firsname' />
           <input value={lastname2} onChange={ (e) =>setLastname2(e.target.value)} className='form-control my-2' type="text" placeholder='eter your lastname' />
           <input value={age2} onChange={ (e) =>setAge2(e.target.value)} className='form-control my-2' type="number" placeholder='eter your age' />
           <input value={email2} onChange={ (e) =>setEmail2(e.target.value)} className='form-control my-2' type="email" placeholder='eter your email' />
           <input value={address2}  onChange={ (e) =>setAddress2(e.target.value)} className='form-control my-2' type="address" placeholder='eter your address' />
           <input value={number2} onChange={ (e) =>setNumber2(e.target.value)} className='form-control my-2' type="number" placeholder='eter your Phone number' />
        </form>
        <button form='formtt'>Save</button>
      </ReactModal>
      
       <div>
         <div className="row">
            <div className="col-md-2 mt-5 text-center mx-auto">
              <button onClick={()=>setOpen(true)} className='btn btn-success '>Add Users</button>
            </div>
         </div>
         <div className="row">
         <div className="col-md-10 mt-4 mx-auto">
              <table className='table'>
                <thead>
                  <tr>
                    <th>T/R</th>
                    <th>User Name</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Edit</th>
                    <th>Dalet</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    users.map((item, index ) =>(
                      <tr key={index}>
                        <th>{index+1}</th>
                        <th>{item.username}</th>
                        <th>{item.first_name}</th>
                        <th>{item.last_name}</th>
                        <th>{item.age}</th>
                        <th>{item.email}</th>
                        <th>{item.address}</th>
                        <th>{item.phone_number}</th>
                        <th><button onClick={()=>editUser(item.id,item.username,item.first_name, item.last_name, item.age, item.email, item.address,item.phone_number)} className='btn btn-info text-white'>edit</button></th>
                        <th><button  onClick={()=>Deleted(item.id)} className='btn btn-danger text-white'>dalet</button></th>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
         </div>
       </div>
    </div>
  )
}

export default Users