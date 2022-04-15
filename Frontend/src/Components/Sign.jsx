import React, { useState } from 'react'
import {sign_loding ,sign_err ,sign_success} from "../Redux/Signup/action"
import {useDispatch} from "react-redux"
import {useNavigate} from "react-router-dom"
export const Sign = () => {
  const [name , setName] = useState('')
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

 const handleSubmit = () =>{
   const userregdata = {
    name,
    email,
    password
  } 
  
  dispatch(sign_loding())
 
  fetch(`https://reqres.in/api/register` , {
    method:"POST",
    body:JSON.stringify(userregdata),
    headers:{"Content-Type":"application/json"}
  })
  .then((res) =>{
    res.json()
  })
   .then((res) =>{
    dispatch(sign_success(res.token))
    alert("Sign Successful")
    navigate("/login")
  }).catch((res) =>{
    dispatch(sign_err())
  })
  
 }

  return (
    <div>
      <input type="text" placeholder='name' value={name}  onChange={(e) =>{
        setName(e.target.value)
      }}/>
      <input type="text" placeholder='email' value={email}  onChange={(e) =>{
        setEmail(e.target.value)
      }}/>
      <input type="text" placeholder='password' value={password}  onChange={(e) =>{
        setPassword(e.target.value)
      }}/>
         <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}
