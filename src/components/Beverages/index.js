import React from 'react'
import "../menu/menuItems.css"
import '../../styles/commonClasses.css'
import Beverage from '../menu/Beverages.json'

const Beverages = () => {

  return (
    <div className="menu-items max-width-menu">
      {Beverage.map((menuItem) => (
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
                  </div>
                </>
              ))}
              <div><hr className='dish-sec-border' /></div>
            </>
          ))}
    </div>
  )
}

export default Beverages;