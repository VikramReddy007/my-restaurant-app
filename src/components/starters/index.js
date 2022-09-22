import React, { useState } from 'react'
import "./starters.css"
import '../../styles/commonClasses.css'
import Switch from 'react-switch'

// const MenuHeadingsVeg = [
//   {
//     id: 1,
//     name: "Soups",
//   },
//   {
//     id: 2,
//     name: "Paneer Starters",
//   },
//   {
//     id: 3,
//     name: "Vegetable Starters",
//   },
//   {
//     id: 4,
//     name: "Mixed Veg Starters"
//   }
// ]

// const MenuHeadingsNonVeg = [
//   {
//     id: 1,
//     name: "Soups",
//   },
//   {
//     id: 2,
//     name: "Chicken Starters",
//   },
//   {
//     id: 3,
//     name: "Mutton Starters",
//   },
//   {
//     id: 4,
//     name: "Fish Starters"
//   }
// ]

const VegMenu = [
  {
    name: "Soups",
    listItems: [
      {
        id: 1,
        name: "Sweet Corn Soup",
        price: 100,
        image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/g5cbia60d0shou5cjzat"
      },

      {
        id: 2,
        name: "Tomato Bath",
        price: 90,
        image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/g5cbia60d0shou5cjzat"
      },

      {
        id: 3,
        name: "Veg Manchow Soup",
        price: 110,
        image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/g5cbia60d0shou5cjzat"
      },

      {
        id: 4,
        name: "Veg Hot and Sour Soup",
        price: 100,
        image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/g5cbia60d0shou5cjzat"
      }
    ]
  }
];

const NonVegMenu = [
  {
    id: 5,
    name: "Chicken Corn Soup",
    price: 120,
  },

  {
    id: 6,
    name: "Chicken Bath",
    price: 110,
  },

  {
    id: 7,
    name: "Chicken Manchow Soup",
    price: 130,
  },

  {
    id: 8,
    name: "Chicken Hot and Sour Soup",
    price: 120,
  }

];

const Starters = () => {

  const [selected, setChecked] = useState("NV");
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
          checked={selected === "NV"}
          onChange={handleChange}
          className="react-switch"
          id="material-switch"
        />
        <p>NON-VEG</p>
        <div className="starter-items">
        </div>
      </label>
      <div className="dish-menu">
        {getDishes(selected)}
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
            <>
              <h3>{menuItem.name} </h3>
                {menuItem.listItems.map((item) => (
                  <>
                  <div className='dish-sec-whole'>
                    <div className="dish-sec-name-price">
                      <div className="dish-item item-name">{item.name}</div>
                      <div className="dish-item item-price">Rs. {item.price}/-</div>
                    </div>
                    <img className="dish-image" src={item.image} alt={item.name} />
                  </div>
                  <hr />
                  </>
                ))}
            </>
          ))}
        </div>
      )
    case "NV":
      return (
        <div>
          {NonVegMenu.map((menuItem) => (
            <>
              <div className='dish-sec-whole'>
                <div className="dish-sec-name-price">
                  <div className="dish-item item-name">{menuItem.name}</div>
                  <div className="dish-item item-price">Rs. {menuItem.price}/-</div>
                </div>
                <img className="dish-image" src={menuItem.image} alt={menuItem.name} />
              </div>
              <hr />
            </>
          ))}
        </div>
      )
  }
}

export default Starters;