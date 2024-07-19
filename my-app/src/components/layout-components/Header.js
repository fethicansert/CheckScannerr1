import React from 'react'
import logo from '../../images/logo1.png'
const Header = ({title}) => {

  return (
    <header className='header'>
      <div className='header-flex-group'>
        <img src={logo} width={70}></img>
        <h1>{title}</h1>
      </div>


        
    </header>
  );
}




export default Header
