import React, { useState, useEffect } from 'react'
import '../../styles/commonClasses.css'
import Switch from 'react-switch'
import "../menu/menuItems.css"
import env from "react-dotenv";

let responseFromAPI;

const BiryaniAndRice = () => {

  const [records, setRecords] = useState([]);
  const [checked, setChecked] = useState("V");
  const [collectionName, setCollectionName] = useState("BiryaniAndRiceVegMenu");
  const handleChange = () => {
    setChecked((menu) => menu === "V" ? "NV" : "V");
    setCollectionName((name) => name === "BiryaniAndRiceVegMenu" ? "BiryaniAndRiceNonVegMenu" : "BiryaniAndRiceVegMenu");
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
      responseFromAPI = resBody;
      setRecords(resBody);
    }

    getRecords();

    console.log(responseFromAPI);
  }, [checked, collectionName]);

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
        {getDishes(records)}
      </div>
    </div>
  )
}

const getDishes = (records) => {
  if (!records.length) {
    return (
      <div align={"center"}>
        <div className='loader'></div>
      </div>
    )
  }
  return (
    <div>
      {records.map((menuItem) => (
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

export default BiryaniAndRice;