import React from 'react'
import Navbar from '../components/Navbar'
// import PropTypes from 'prop-types'
import "../css/CreatePageStyles.css"
const CreatePage = () => {


  return (
    <>
    <Navbar/>
    <div className='container'>
    <h1 className='center-x'>Creating a Blog</h1>
     <div className='container-2'>
      <h4>Title</h4>
     <input type='text' className='text-input' placeholder=''></input>
     <h4>Description</h4>
     <input type='text' className='text-input' placeholder=''></input>
     <h4>Author</h4>
     <input type='text' className='text-input' placeholder=''></input>
     <h4>Date</h4>
     <input type='text' className='text-input' placeholder=''></input>
     <h4>image</h4>
     <input type='file' name='file'/>
     
     <div>
      <br></br>
     <button>Submit</button>
     </div>
  


     </div>

    </div>

     </>
  
 

  )
}

// CreatePage.propTypes = {}

export default CreatePage
