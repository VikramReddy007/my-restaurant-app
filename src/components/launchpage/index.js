import React from 'react'
import '../launchpage/launchStyles.css'
import '../../styles/commonClasses.css'
import Header from '../../components/common/header';

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
        </div>
        <button className='menu-link button-36'
          type="button"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = '/menu';
          }}
        >MENU</button><br />
        <button className='review-link button-36'
          type="button"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = 'https://g.page/r/CUg3PhEDzsh6EBM/review';
          }}
        >REVIEW</button>
      </div>
      {/* <Footer/> */}
    </>

  )
}

export default LaunchPage;