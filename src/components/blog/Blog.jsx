import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from '../loader/Loader';
// import { blogs } from '../offline/blogs'
const Blog = () => {
  let [Blogs, setBlogs] = useState(null);
  let [loader, setLoader] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:8000/blogs')
      .then(res => {
        // console.log(res.data);
        setTimeout(() => {
          setBlogs(res.data);
          setLoader(false);
          
        }, 5000);
      })
      .catch(err => {
        console.log(err.message);
      })
  }, []);

  return (
    <div>
      <h1>Latest Blogs</h1>
      {
        loader && <Loader />
      }
      {
        !loader && Blogs && Blogs.map(blog => {
         return <div key={blog.id}>
           <h2> {blog.title} </h2>
           <p> {blog.content.slice(0,50)}... </p>
           <h5> {blog.author} </h5>
           <Link to={`/details/${blog.id}`}>Read More</Link>
          </div>
        })    
      }

    </div>
  )
}

export default Blog