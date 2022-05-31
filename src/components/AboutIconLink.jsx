import React from 'react'
// this is a library that gives you the question mark on the bottom of the page 
import {FaQuestion} from 'react-icons/fa'
// this is used instead of an <a tag for links so it dose not just refesh the page when you go abck and forth from each page
// import {Link} from 'react-router-dom';

function AboutIconLink() {
  return (
    <div className ='about-link'>
        <a href ='/about'>
        {/* use this instead of the <a tag  */}
        {/* <Link to='/about'> */}
        <FaQuestion size ={30} />
        {/* </Link> */}
          </a>
    </div>
  )
}

export default AboutIconLink