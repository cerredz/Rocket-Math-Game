import React from 'react';

const Navbar = (props) => {




  return (
    <div className='navbar-container'>
        <div className='nav-item '>
          <button className='button-1' onClick={props.handleCasualClick}>Casual</button>
        </div>
        <div className='nav-item '>
          <button className='button-2' onClick={props.handleRankedClick}>Ranked</button>
        </div>
        <div className='nav-item '>
          <button className='button-3 ' onClick={props.onButtonThreeClick}>Sign In / Log In</button>
          
        </div>
    </div>
  )
}

export default Navbar