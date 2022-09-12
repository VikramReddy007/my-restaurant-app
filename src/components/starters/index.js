import React from 'react'
import "./starters.css"
import '../../styles/commonClasses.css'

const VegMenu = [
  {
    id: 1, 
    name: "Sweet Corn Soup",
  },

  {
    id: 2, 
    name: "Tomato Bath",
  },

  {
    id: 3, 
    name: "Veg Manchow Soup",
  },

  {
    id: 4, 
    name: "Veg Hot and Sour Soup",
  }

];

const Starters = () => {
  return (
    <div className="menu-items">
      <h3 className="section-heading max-width">VEG</h3>
      <div>
        <div className ="starter-items">
          {VegMenu.map((menu)  => 
            <div className="menu-item">{menu.name}</div>
        )}</div>
      </div>
    </div>    
  )
}

export default Starters;