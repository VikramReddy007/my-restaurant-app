import React from 'react'
import './header.css';
import mainLogo from './mainLogo.png';
import '../../../styles/commonClasses.css'

const Header = () => {
  return (
    <div className='max-width header'>
        <img src={mainLogo} alt='My Restaurant' className='header-logo' />
        <div className='header-left'>
            <div className='header-location-search-container'>
                <i class="fa-solid fa-magnifying-glass absolute-center"></i>
                <input type='text' className='header-search-input' placeholder='Search Starters, MainCourse, Deserts!!!' />
            </div>
        </div>
        <div className='profile-wrapper absolute-center'>
            <i class="fa-solid fa-user absolute-center"></i>
            <span className='header-username absolute-center'>Vikram</span>
        </div> 
    </div>
  )
}

export default Header;