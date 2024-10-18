import React from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import { NavLink, useNavigate } from 'react-router-dom'

const SignIn = () => {
    const navigate = useNavigate()
    const {register, handleSubmit} = useForm()

    const enter = async (data) =>{
      const response = await axios.post("http://localhost:3000/api/user", data)
      if(response.data.userId == null){
        alert("User's Name or password is wrong")
      }
      else{
          alert(`Welcome back, ${response.data.userName}!`)
          navigate(`/profile/${response.data.userId}`, { replace: true })
          return response.data
      }
    }
    

  return (
    <>
    <div id="div">
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit(enter)}>
        <input {...register("userName", {required: true})} type="text" placeholder='User name'/>
        <input {...register("password", {required: true})} type="password" placeholder='Password'/>
        <input type="submit" className='inp' id='inp' value="Sign In"/>
        <NavLink to={'/signup'}>
          <p>SignUp</p>
        </NavLink>
      </form>
    </div>
    </>
  )
}

export default SignIn