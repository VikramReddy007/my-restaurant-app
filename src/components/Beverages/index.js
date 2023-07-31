import React, {useState, useEffect} from 'react'
import "../menu/menuItems.css"
import '../../styles/commonClasses.css'
import env from "react-dotenv";

const Beverages = () => {
  const [records, setRecords] = useState([]);
  let collectionName = "Beverages";
  let responseFromAPI;
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
      console.log(responseFromAPI);
    }

    getRecords();
    // eslint-disable-next-line
  }, []);

  if (!records.length) {
    return (
      <div align={"center"}>
        <div className='loader'></div>
      </div>
    )
  }
  return (
    <div className="menu-items max-width-menu">
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