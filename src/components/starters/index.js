import React, { useState } from 'react'
import "../menu/menuItems.css"
import '../../styles/commonClasses.css'
import Switch from 'react-switch'
import VegMenu from '../menu/StartersVegMenu.json'
import NonVegMenu from '../menu/StartersNonVegMenu.json'

let responseFromAPI;

const Starters = () => {

  const [selected, setChecked] = useState("V");
  const handleChange = () => {
    setChecked((menu) => menu === "V" ? "NV" : "V");
  };

  return (
    <div className="menu-items max-width-menu">
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
    case "NV":
      return (
        <div>
          {NonVegMenu.map((menuItem) => (
            <>
              <div className='dish-category'>
                <h2>{menuItem.name}</h2>
                <img className="dish-image" src={menuItem.image} alt={menuItem.name} />
              </div>
              {menuItem.listItems.map((item) => (
                <>
                  <hr />
                  <div className='dish-sec-whole'>
                    <div className="dish-sec-name-price">
                      <div className="dish-item item-name">{item.name}</div>
                      <div className="dish-item item-price">Rs. {item.price}/-</div>
                    </div>
                    {/* <img className="dish-image" src={item.image} alt={item.name}/> */}
                  </div>
                </>
              ))}
              <div><hr className='dish-sec-border' /></div>
            </>
          ))}
        </div>
      )
      case "V": default:
      return (
        <div>
          {VegMenu.map((menuItem) => (
            <>
              <div className='dish-category'>
                <h2>{menuItem.name}</h2>
                <img className="dish-image" src={menuItem.image} alt={menuItem.name} />
              </div>
              {menuItem.listItems.map((item) => (
                <>
                  <hr />
                  <div className='dish-sec-whole'>
                    <div className="dish-sec-name-price">
                      <div className="dish-item item-name">{item.name}</div>
                      <div className="dish-item item-price">Rs. {item.price}/-</div>
                    </div>
                    {/* <img className="dish-image" src={item.image} alt={item.name}/> */}
                  </div>
                </>
              ))}
              <div><hr className='dish-sec-border' /></div>
            </>
          ))}
        </div>
      )
  }
}

export default Starters;