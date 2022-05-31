// this page is just an example of changing the top bar  local3000 
// import React from 'react'
// this is used for when you are on the top of the local3000 and you wanna add an id dor name to the browser in the local 3000
import {useParams} from 'react-router-dom';

function Posts() {
    const params =useParams()
  return (
    <div>
        <h1>
            Post {params.id}
        </h1>
        <p>Name: {params.name}</p>
    </div>
  )
}

export default Posts