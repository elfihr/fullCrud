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
    <section className='min-h-[80vh]'>
      <h3>Home</h3>
      <div>
        {posts.map(item => {
          return(
            <div>
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