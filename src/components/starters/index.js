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

  // const [checked, setChecked] = useState(false);
  // const handleChange = nextChecked => {
  //   setChecked(nextChecked);
  // };

  return (
    <div className="menu-items max-width">
      <label className="switch-dish-type">
        <p>Veg</p>
        <Switch
          // checked={this.state.checked}
          // onChange={this.handleChange}
          onColor="#86d3ff"
          onHandleColor="#2693e6"
          handleDiameter={30}
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          height={20}
          width={48}
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

export default Starters;