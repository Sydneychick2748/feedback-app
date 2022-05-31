import {FaTimes} from 'react-icons/fa'
// import {useState,useEffect,} from 'react'
import Card from "../shared/Card";
import PropTypes from 'prop-types';

function FeedbackItem({item, handleDelete}) {

 
   
  return (
    // <div className="card">
    <Card >
        <div className="num-display">
          {item.rating}</div>
          <button onClick ={()=> handleDelete(item.id)}className='close'>
        <FaTimes  color='purple'/>
        </button>
        <div className= "text-display">{item.text}</div>
       </Card >
    // </div>
  )
}
 FeedbackItem.propTypes ={
   item: PropTypes.object.isRequired
 }

export default FeedbackItem