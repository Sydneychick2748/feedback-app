// this page is not in use but its just showing how to redirect links 
import React from 'react'
import {Navigate, useNavigate} from 'react-router-dom'

function PostsexampleRedirect() {
    // this is for navigating from a page that wont load using the "Navigate import 
    const status =200

    // this is for the button to navigate to another page using the "useNavigate import " 
    const navigate = useNavigate()

    const onClick = () => {
        console.log('hello')
        navigate('/about')
    }

    if (status===404){
        return <Navigate to ='/notfound'/>
    }
    
  return (
       
    <div>
        <h1>Post</h1>
        <button onClick = {onClick}>Click </button>
    </div>
  )
}

export default PostsexampleRedirect