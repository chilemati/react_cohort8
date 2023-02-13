import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Update from '../update/Update';
import {MdDeleteForever,MdModeEditOutline} from 'react-icons/md'

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';  //! toast step:1

const Details = () => {
    let { id } = useParams();
    let [blog, setBlog] = useState(null);
    let redirect = useNavigate();
    let [show, setShow] = useState(false);

    const notify = () => toast.success("Blog Deleted Successfully!", {
        theme: 'dark',
        position: "top-center",
        autoClose: 3000,
    }); //! toast step:2

    useEffect(() => {
        axios.get(`http://localhost:8000/blogs/${id}`)
            .then(res => {
                // console.log(res.data);
                setBlog(res.data);
            })
            .catch(err => {
                console.log(err.message);
            })
        
        
    }, []);

    function handleDelete() {
        axios.delete(`http://localhost:8000/blogs/${id}`) //? this request
            //? takes time or is a Promise. so then() and catch() is used or
            //? async and await. These tell react to wait for this request 
            //? before running the codes below it
            .then(res => {
                // console.log(`blog with id of ${id} was deleted Successfully`);
                notify();  //! toast step: 4
                //? redirect to blogs page
                setTimeout(() => {
                    redirect('/blog');
                    
                }, 3000);

            })
            .catch(err => {
                console.log(err.message);
        })
    }
    

  return (
      <div>
          {
             !show && blog &&  <div key={blog.id}>
                  <h1>Blog Details for Blog No. {id} </h1>
                      <h1> {blog.title} </h1>
                      <p> {blog.content} </p>
                  <h5> {blog.author} </h5>
                  <div className='btn'>
                      <button onClick={() => handleDelete()}>
                          <MdDeleteForever title='Delete This Blog' />
                      </button>
                      <button onClick={() => setShow(true)}>
                          <MdModeEditOutline title='Edit This Blog' />
                      </button>
                  </div>
                  </div>
          }

          {
              show && <Update
                  id={id}
                  blog={blog && blog}
                  cancel={setShow} />
          }

          <ToastContainer />  {/*//! toast step:3  */}
    </div>
  )
}

export default Details