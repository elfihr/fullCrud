import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {
  const [posts,setPosts] = useState([])

useEffect  (() => {
  const fetchAll = async () => {
    try{
      const res = await axios.get("/api/posts")
      setPosts(res.data)
    }catch(err){
      console.log(err)
    } 
  }
  fetchAll()
},[])

  return (
    <section className='min-h-[80vh] flex flex-col  items-center'>
      <h3 className='text-3xl font-bold py-4'>Home</h3>
      <div className='flex flex-wrap gap-4'>
        {posts.map(item => {
          return(
            <div key={item.id}>
            <img className='w-60 h-40 shadow-2xl' src={item.img} alt={item.title}/>
              <h3>{item.title}</h3>
          </div>
          )          
        })}
      </div>
    </section>
  )
}

export default Home