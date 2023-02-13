import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Create = () => {
    // console.log(blog);
    let [title, setTitle] = useState('');
    let [author, setAuthor] = useState('');
    let [content, setContent] = useState('');
    let redirect = useNavigate();
    let toUpt = {
        title,
        author,
        content
    }
    
    function handleSubmit(e) {
        e.preventDefault(e);
        // console.log(toUpt);
        axios.post(`http://localhost:8000/blogs`, toUpt)
            .then(res => {
                console.log(`Blog Created Successfully!`)
                setTimeout(() => {
                    redirect('/blog');
                }, 2000);
            })
            .catch(err => {
                console.log(err.messaage);
            });

    }
    
    function cancel() {
        redirect('/blog');
    }


  return (
      <div className='update'>
          <h1>Create a New Blog</h1>
          <div className="form">
              <form onSubmit={(e) => handleSubmit(e)}>
                  <label htmlFor="">Title</label>
                  <div></div>
                  <input
                      type="text"
                      name='title'
                      onChange={(e)=> setTitle(e.target.value)}
                      value={title}
                  />
                  <div></div>
                  <label htmlFor="">Content</label>
                  <div></div>
                  <textarea
                      name="content"
                      cols="60"
                      rows="10"
                      onChange={(e)=> setContent(e.target.value)}
                      value={content}
                  ></textarea>
                  <div></div>
                  <label htmlFor="">Author</label>
                  <select
                      name="author"
                      onChange={(e)=> setAuthor(e.target.value)}
                      value={author}
                  >
                      <option value="Mr. Chile">Mr. Chile</option>
                      <option value="Mr. Handa">Mr. Handa</option>
                      <option value="Mr. James">Mr. James</option>
                      <option value="Mr. Godfirst">Mr. Godfirst</option>
                      <option value="Miss. Edi">Miss. Edi</option>
                  </select>
                  
                  <div className="btn">
                      <button onClick={()=> cancel(false)}>Cancel</button>
                      <button>Create Blog</button>
                  </div>
              </form>


          </div>
    </div>
  )
}

export default Create