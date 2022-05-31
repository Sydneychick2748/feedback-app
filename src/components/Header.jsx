import React from 'react';
// this is added to be able to send the props on line 22
import PropTypes from 'prop-types';
// the props are passssed in individualy in the curles 



function Header({text,bgColor,textColor} ) {
    // these are global styles  put into a const and passed as a prop 
    const headerSyles = {
        backgroundColor: bgColor,
        color: textColor,
        
    }

  return (
      <header style={headerSyles}>
    <div className="container">
        <h2>{text}</h2>
    </div>
    </header >
  )
}
// this is a way to declare the props so you dont have to go to the <Header />  component for example and pass them in there you can add them here  instead which is cool 
Header.defaultProps = {
    text: 'Feedback UI',
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: '#ff6a95'
}

Header.propsType = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string
}


export default Header