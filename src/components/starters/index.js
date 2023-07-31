import React, { useState, useEffect } from 'react'
import "../menu/menuItems.css"
import '../../styles/commonClasses.css'
import Switch from 'react-switch'
import env from "react-dotenv";
import '../../../src/index.css'

const Starters = () => {
  const [records, setRecords] = useState([]);
  const [checked, setChecked] = useState("V");
  const [collectionName, setCollectionName] = useState("StartersVegMenu");
  const handleChange = () => {
    setChecked((menu) => menu === "V" ? "NV" : "V");
    setCollectionName((name) => name === "StartersNonVegMenu" ? "StartersVegMenu" : "StartersNonVegMenu");
  };

  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`${env.DB_SERVER_URL}/menu/` + collectionName);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
      const resBody = await response.json();
      setRecords(resBody);
    }

    getRecords();
  }, [checked, collectionName]);

  return (
    <div className="menu-items max-width-menu" key="StartersMenu">
      <label className="switch-dish-type" key='switch-label'>
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
          key='switch-element'
        />
        <p>NON-VEG</p>
      </label>
      <div className="dish-menu" key="dish-menu-key">
        {getDishes(records)}
      </div>
    </div>
  )
}

const getDishes = (records) => {
  if (!records.length) {
    return (
      <div align={"center"}>
        <div key='load-circle' className='loader'></div>
      </div>
    )
  }
  return (
    <div key='total-render'>
      {records.map((menuItem) => (
        <div key={menuItem.name}>
          <div className='dish-category' key={menuItem.id}>
            <h2 key={'heading1' + menuItem.name}>{menuItem.name}</h2>
            <img key={'image' + menuItem} className="dish-image" src={menuItem.image} alt={menuItem.name} />
          </div>
          {menuItem.listItems.map((item) => (
            <div key={'listItems' + item.name}>
              <hr key={'line-break' + item.name} />
              <div className='dish-sec-whole' key={'dish-sec-whole' + item.name}>
                <div className="dish-sec-name-price" key={'dish-sec-name-price' + item.name}>
                  <div className="dish-item item-name" key={'dish-item-name' + item.name}>{item.name}</div>
                  <div className="dish-item item-price" key={'dish-item-price' + item.name}>Rs. {item.price}/-</div>
                </div>
                {/* <img className="dish-image" src={item.image} alt={item.name}/> */}
              </div>
            </div>
          ))}
          <div key={'line-break' + menuItem.id}><hr className='dish-sec-border' key={menuItem.id + 'border'} /></div>
        </div>
      ))}
    </div>)
}

export default Starters;