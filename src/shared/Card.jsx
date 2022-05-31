import React from 'react'
import PropTypes from 'prop-types';
function Card({ children, reverse}) {
  // ====this is a conditional style using class 
  // return (
  //   <div className= {`card ${reverse && 'reverse'}`}>{children}</div>
  // )

return(
  // this is inline ternaray for styles 
  <div className= 'card' 
  style={{backgroundColor: reverse ? 'rgba(0,0,0,0.4' : '#fff',
  color: reverse ? '#fff': '#000',}} >{children}
  
  </div>
)
}
  Card.defaultProps = {
    reverse: false,
  
}
Card.propsTypes ={
  children: PropTypes.node.isRequired,
  reverse:PropTypes.bool,
}

export default Card