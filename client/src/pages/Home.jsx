import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {
  const [posts,setPostes] = useState([])

useEffect = (() => {
  const fetchAll = async () => {
    try{
      const res = await axios.get
    }catch(err){
      
    }
    
  }
},[])

  return (
    <div className='min-h-[80vh]'>Home</div>
  )
}

export default Home