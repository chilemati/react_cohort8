import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Update = ({ id, blog, cancel }) => {
    // console.log(blog);
    let [title, setTitle] = useState(blog.title);
    let [author, setAuthor] = useState(blog.author);
    let [content, setContent] = useState(blog.content);
    let redirect = useNavigate();
    let toUpt = {
        title,
        author,
        content
    }
    
    function handleSubmit(e) {
        e.preventDefault(e);
        // console.log(toUpt);
        axios.patch(`http://localhost:8000/blogs/${id}`, toUpt)
            .then(res => {
                console.log(`Blog with id of ${id} was updated Successfully!`)
                setTimeout(() => {
                    redirect('/blog');
                }, 2000);
            })
            .catch(err => {
                console.log(err.messaage);
            });

    }

  return (
      <div className='update'>
          <h1>Blog Update for Blog No. {id} </h1>
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
                      <button>Update Blog</button>
                  </div>
              </form>


          </div>
    </div>
  )
}

export default Update