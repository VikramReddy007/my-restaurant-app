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
    name: "Deserts",
    active_img: DesertsImage,
    backdrop: "#FCEEC0",
    inactive_img: "./images/Deserts.png",
  }

];

const TabOptions = ({ activeTab, setActiveTab }) => {
  return (
    <div className="tab-options max-width">
      <div className="options-wrapper max-width">
        {tabs.map((tab) => (
          <div
            className={`tab-item absolute-center cur-po ${
              activeTab === tab.name && "active-tab"
            }`}
            onClick={() => setActiveTab(tab.name)}
          >
            <div
              className="tab-image-container absolute-center"
              style={{
                backgroundColor: `${
                  activeTab === tab.name ? tab.backdrop : ""
                }`,
              }}
            >
              <img
                src={tab.active_img}
                className="tab-image"
                alt={tab.name}
              />
            </div>
            <div className="tab-name">{tab.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabOptions;