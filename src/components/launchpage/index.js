import React from 'react'
import '../launchpage/launchStyles.css'
import '../../styles/commonClasses.css'
import Header from '../../components/common/header';
import { Link } from '@mui/material';

const LaunchPage = () => {
  return (
    <>
      <Header />
      <div className="launch-page max-width">
        <div class="snow">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          {/* <div></div> */}
        </div>
        <div className='intro-text max-width'>
          Mana CHUTNEYS Multi-cuisine Restaurant
          NH-44 Road, Baswapur, Kamareddy - 503101<br />
          Location: <Link href='https://goo.gl/maps/Tb1sa6Jy8rygWLmL9'>Click here</Link><br />
          Call: <a href='tel:8340007272'><b>8340007272</b></a> for online orders
        </div>
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
              window.location.href = 'https://g.page/r/CUg3PhEDzsh6EBM/review';
            }}
          >REVIEW</button>
        </div>
      </div>  
    </>

  )
}

export default LaunchPage;