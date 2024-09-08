import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { Button } from '@mui/material';
import {Link} from 'react-router-dom'

const Login = () => {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center items-center'>
      <div className='shadow-2xl px-8 py-8  flex flex-col justify-center items-center' >
        <h3 className='font-semibold text-2xl'>Login</h3>

        <div className='flex flex-col gap-2 my-8'>
          <div className='flex gap-2 items-center'>
            <AccountCircleIcon />
            <input className='border-b-[2px]' placeholder='username*' type='text' name='user' />
          </div>
          <div className='flex gap-2 items-center'>
            <VpnKeyIcon />
            <input className='border-b-[2px]' placeholder='password*' type='password' name='password' />
          </div>
        </div>

        <Button variant='contained' sx={{ backgroundColor: '#C7253E', "&:hover": { backgroundColor: "#E85C0D" } }}>Login</Button>
        <p>Don't have a account?<Link to='/register' className='underline'>Register</Link></p>
      </div>

    </section>
  )
}

export default Login