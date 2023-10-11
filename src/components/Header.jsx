import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div className='app-header'>
        <img src="https://static.vecteezy.com/system/resources/previews/023/258/081/original/weather-icon-sun-and-cloud-icon-png.png" alt="logo" className='logo'/>
        <h2 className='brand-name'>SkyStatus</h2>
    </div>
  )
}

export default Header