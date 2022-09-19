import React, { useState } from 'react'
import "./starters.css"
import '../../styles/commonClasses.css'
import Switch from 'react-switch'

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

  const [checked, setChecked] = useState("V");
  const handleChange = () => {
    setChecked((menu) => menu === "V" ? "NV" : "V");
  };

  return (
    <div className="menu-items max-width">
      <label className="switch-dish-type">
        <p>VEG</p>
        <Switch
          offColor='#00cc44'
          onColor="#ff0000"
          onHandleColor="#ffffff"
          handleDiameter={30}
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 1.8)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          height={20}
          width={48}
          checked={checked === "NV"}
          onChange={handleChange}
          className="react-switch"
          id="material-switch"
        />
        <p>NON-VEG</p>
        <div className="starter-items">
        </div>
      </label>
      <div className="dish-menu">
        {getDishes(checked)}
      </div>
    </div>
  )
}

const getDishes = (type) => {
  switch (type) {
    case "V": default:
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