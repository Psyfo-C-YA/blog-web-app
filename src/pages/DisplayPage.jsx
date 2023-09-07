import { React, useState } from 'react'
import Navbar from '../components/Navbar'
import Button from './Button'


const DisplayPage = ( { post }) => {
  const [post, setPost] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState(new Date());
  const [img, setImg] = useState("");
  const [img_caption, setImgCaption] = useState("");
  const [body, setBody] = useState("");

  const stateString = JSON.stringify(snap);

  return (    
    <>
      <Navbar />

      <group className='displayPost'>
        <span className='displayAuthor'>
            Author
          <img
            {...img}
            className='displayProfile'
            width={"50px"}
            height={"50px"}
            position={"relative"}
            src={`http://localhost:5000/tasks/${avatar}`}
          >
            {img_caption}
          </img>

          <h4>{author}{' '}</h4>      
          <p>{profession}</p>
        </span>
        <span>
          <h2>{title}{' '}</h2> 
          <p>{description}</p>     
          <p>{date}</p>
          <p>{body}</p>
        </span>
      </group>
      
    </>
  )
}

export default DisplayPage
