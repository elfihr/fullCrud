import React from 'react'
import { menuLinks } from '../helper/helper'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg-bg01 w-full text-white py-6 px-[5%] flex justify-between'>
      <div>
        <h3 className='text-2xl'>Logo</h3>
      </div>
      <div className='flex gap-4'>
        {menuLinks.map((link,index) => {
          return(
            <div key={index}>
              <Link className={link.class} to={link.href}>{link.name}</Link>
            </div>
          )
        })}
        <div>
          <Link className='btn02 font-bold' to='/login'>Login</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar