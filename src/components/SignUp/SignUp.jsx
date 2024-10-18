import React from 'react'
import './SignUp'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import { NavLink, useNavigate } from 'react-router-dom'


const SignUp = () => {
  const navigate = useNavigate()
    const {register, handleSubmit} = useForm()

    const registration = async (data) =>{
      const response = await axios.post("http://localhost:3000/api/user/add", data)
      alert(response.data.message)
      if(response.data.successfully){
        navigate(`/signin`, { replace: true })
      }
      return response.data
    }
  
  
  
    return (
      <>
      <div id="div">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit(registration)}>
          <input {...register("userName", {required: true})} type="text" placeholder='User name'/>
          <input {...register("email", {required: true})} type="email" placeholder='Email'/>
          <input {...register("password", {required: true})} type="password" placeholder='Password'/>
          <input type="submit" className='inp' id='inp' value="Sign Up"/>
          <NavLink to={'/signin'}>
            <p>SignIn</p>
          </NavLink>
        </form>
      </div>
      </>
    )
}

export default SignUp

