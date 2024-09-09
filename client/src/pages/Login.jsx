import React, { useState,useRef } from 'react'
import axios from 'axios'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { Button } from '@mui/material';
import {Link, useNavigate} from 'react-router-dom'

const Login = () => {
  const inputRef = useRef(null);
  const [err, setErr] = useState(null)

  const [input, setInput] = useState({
    username: "",
    password: ""
  })

  const handleChange = e => {
    setInput(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }
  //userLogged



  const navigate = useNavigate()
  
  const handleSubmit = async e => {
    e.preventDefault()
    try {
      if (inputRef.current.value.trim() === "") {
        setErr("Campos não podem Ficar em Branco");
      } else {

        const res = await axios.post("/api/auth/login", input)
        navigate("/")
      }

    } catch (err) {
      setErr(err.response.data);
    }

  }

  return (
    <section className='min-h-[80vh] flex flex-col justify-center items-center'>
      <div className='shadow-2xl px-8 py-8  flex flex-col justify-center items-center' >
        <h3 className='font-semibold text-2xl'>Login</h3>

        <div className='flex flex-col gap-2 my-8'>
          <div className='flex gap-2 items-center'>
            <AccountCircleIcon />
            <input className='border-b-[2px]' placeholder='username*' type='text' onChange={handleChange} name='username' ref={inputRef} />
          </div>
          <div className='flex gap-2 items-center'>
            <VpnKeyIcon />
            <input className='border-b-[2px]' placeholder='password*' type='password' onChange={handleChange} name='password' ref={inputRef}/>
          </div>
        </div>

        <Button onClick={handleSubmit} variant='contained' sx={{ backgroundColor: '#C7253E', "&:hover": { backgroundColor: "#E85C0D" } }}>Login</Button>
        <p className='mt-4'>Don't have a account? <Link to='/register' className='underline hover:text-slate-400'>Register</Link></p>
        {err && <p className='text-red-500'>{err}</p>}
      </div>

    </section>
  )
}

export default Login