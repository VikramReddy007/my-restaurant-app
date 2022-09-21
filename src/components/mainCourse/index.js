import React from 'react'
import '../../styles/commonClasses.css'
import { useState } from 'react'
import Switch from 'react-switch'

const VegMenu = [
  {
    id: 1,
    name: "",
    price: 100
  },

  {
    id: 2,
    name: "Tomato Bath",
    price: 90
  },

  {
    id: 3,
    name: "Veg Manchow Soup",
    price: 110
  },

  {
    id: 4,
    name: "Veg Hot and Sour Soup",
    price: 100
  }

];

const NonVegMenu = [
  {
    id: 5,
    name: "Chicken Moghlai",
    price: 120,
  },

  {
    id: 6,
    name: "Chicken Chettinad",
    price: 110,
  },

  {
    id: 7,
    name: "Chicken Chat Pat",
    price: 130,
  },

  {
    id: 8,
    name: "Chicken Doplaza",
    price: 120,
  },
  {
    id: 9,
    name: "Chicken Shahi Kurma",
    price: 120,
  },

  {
    id: 10,
    name: "Chicken Nawabi",
    price: 110,
  },

  {
    id: 11,
    name: "Afghani Chicken",
    price: 130,
  },

  {
    id: 12,
    name: "Kadai Chicken",
    price: 120,
  },
  {
    id: 13,
    name: "Andhra Chicken",
    price: 120,
  },

  {
    id: 14,
    name: "Butter Chicken",
    price: 110,
  },

  {
    id: 15,
    name: "Dham-ka-Chicken",
    price: 130,
  },

  {
    id: 16,
    name: "Chicken Tikka Masala",
    price: 120,
  }

];

const MainCourse = () => {
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
        <div>
          {VegMenu.map((menuItem) => (
            <div className="dishes">
              <div className="dish-item item-name">{menuItem.name}</div>
              <div className="dish-item item-price">Rs. {menuItem.price}/-</div>
            </div>
          ))}
        </div>
      )
    case "NV":
      return (
        <div>
          {NonVegMenu.map((menuItem) => (
            <div className="dishes">
              <div className="dish-item item-name">{menuItem.name}</div>
              <div className="dish-item item-price">Rs. {menuItem.price}/-</div>
            </div>
          ))}
        </div>
      )
  }
}

export default MainCourse;