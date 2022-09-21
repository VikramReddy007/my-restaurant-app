import React from 'react'
import './header.css'
import mainLogo from './mainLogo.png'
import titleLogo from './TitleLogo.svg'
import '../../../styles/commonClasses.css'

const Header = () => {
  return (
    <>
      <div className='max-width header'>
          <img src={mainLogo} alt='My Restaurant' className='header-logo' />
          <img src={titleLogo} alt='Mana Chutneys' className='title-logo max-width absolute-center' />
      </div>      
    </>
  )
}

export default Header;