import React from 'react'
import './header.css'
import '../../../styles/commonClasses.css'

const Header = () => {
  const mainLogo = "https://ik.imagekit.io/vb0g5zv8u/mainLogo_NxDxfwNIu.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665498819563";
  const titleLogo = "https://ik.imagekit.io/vb0g5zv8u/TitleLogo_lE-cNJEm1.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1665498830812";
  return (
    <>
      <div className='header max-width'>
          <img src={mainLogo} alt='My Restaurant' className='header-logo' />
          <img src={titleLogo} alt='Mana Chutneys' className='title-logo max-width' />
      </div>      
    </>
  )
}

export default Header;