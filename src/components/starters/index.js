import React, { useState } from 'react'
import "./starters.css"
import '../../styles/commonClasses.css'
import ReactSwitch from 'react-switch'

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

const NonVegMenu = [
  {
    id: 5,
    name: "Chicken Corn Soup",
  },

  {
    id: 6,
    name: "Chicken Bath",
  },

  {
    id: 7,
    name: "Chicken Manchow Soup",
  },

  {
    id: 8,
    name: "Chicken Hot and Sour Soup",
  }

];

const Starters = () => {

  const [checked, setChecked] = useState(null);
  const handleChange = () => {
    setChecked(nextChecked);
  };

  return (
    <div className="menu-items max-width">
      <label className="switch-dish-type">
        <p>Veg</p>
        <ReactSwitch
          checked={this.state.checked}
          onChange={handleChange}
          className="react-switch"
          id="material-switch"
        />
        <p>Non-Veg</p>
        <div className="starter-items">
        </div>
      </label>
    </div>
  )
}

getDishes = (type) => {
  switch(type){
    case "V":
      return (
        <div className="dishes">
          {VegMenu.map((menuItem) => (
              <div className="tab-name">{menuItem.name}</div>
          ))}
        </div>
      )
    case "NV":
      return (
        <div className="dishes">
          {NonVegMenu.map((menuItem) => (
              <div className="tab-name">{menuItem.name}</div>
          ))}
        </div>
      )
  }
}

export default Starters;