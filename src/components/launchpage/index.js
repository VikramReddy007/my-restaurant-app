import React from 'react'
import '../launchpage/launchStyles.css'
import '../../styles/commonClasses.css'
import Header from '../../components/common/header';

const LaunchPage = () => {
  return (
    <>
      <Header className='header-on-launch' />
      <div className="launch-page max-width">
        <div className="snow">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <h4 className='intro-text max-width'>
          Mana CHUTNEYS Multi-cuisine Restaurant<br />
          NH-44 Road, Baswapur, Kamareddy - 503101<br />
          Location: <b><a id='nav-links' target='_blank' rel="noopener noreferrer" href='https://goo.gl/maps/Tb1sa6Jy8rygWLmL9'>Click here</a></b><br />
          Call: <b><a id='nav-links' href='tel:8340007272'>8340007272</a></b> for online orders
        </h4>
        <div className="navigate-buttons">
          <button className='menu-link button-36'
            type="button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = '/menu';
            }}
          >MENU</button>
          <button className='review-link button-36'
            type="button"
            onClick={(e) => {
              e.preventDefault();
              window.open ('https://g.page/r/CUg3PhEDzsh6EBM/review', '_blank');
            }}
          >REVIEW</button>
        </div>
      </div>  
    </>

  )
}

export default LaunchPage;