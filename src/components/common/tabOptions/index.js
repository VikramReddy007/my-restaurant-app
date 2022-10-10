import React from 'react'
import './tabOptions.css'
import StartersImage from './images/Starters.png'
import MainCourseImage from './images/MainCourse.png'
import DesertsImage from './images/Deserts.png'

const tabs = [
  {
    id: 1, 
    name: "Starters",
    active_img: StartersImage,
    backdrop: "#FCEEC0",
    inactive_img: "./images/starters.png",
  },

  {
    id: 2, 
    name: "MainCourse",
    active_img: MainCourseImage,
    backdrop: "#FCEEC0",
    inactive_img: "./images/MainCourse.png",
  },

  {
    id: 3, 
    name: "Biryani/Rice",
    active_img: DesertsImage,
    backdrop: "#FCEEC0",
    inactive_img: "./images/Deserts.png",
  }

];

const TabOptions = ({ activeTab, setActiveTab }) => {
  return (
      <div className="options-wrapper max-width">
        {tabs.map((tab) => (
          <div
            className={`tab-item absolute-center cur-po ${
              activeTab === tab.name && "active-tab"
            }`}
            onClick={() => setActiveTab(tab.name)}
          >
          <div className="tab-name absolute-center">{tab.name}</div>
          </div>
        ))}
      </div>
  );
};

export default TabOptions;