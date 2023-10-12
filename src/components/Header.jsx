import React from 'react'
import logo from './logo.svg'
import './header.css'

const Header = () => {
  return (
    <div className='app-header'>
        <img src={logo} alt="logo" className='logo'/>
        <h2 className='brand-name'>SkyStatus</h2>
    </div>
  )
}

export default Header