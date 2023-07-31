import React, {useState, useEffect} from 'react'
import "../menu/menuItems.css"
import '../../styles/commonClasses.css'
import env from "react-dotenv";

const Beverages = () => {
  const [records, setRecords] = useState([]);
  let collectionName = "Beverages";
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
    <div key='total-render'><br/>
      {records.map((menuItem) => (
        <div className='max-width-menu' key={menuItem.name}>
          <div className='dish-category' key={menuItem.id}>
            <h2 key={'heading1'+menuItem.name}>{menuItem.name}</h2>
            <img key={'image'+menuItem} className="dish-image" src={menuItem.image} alt={menuItem.name} />
          </div>
          {menuItem.listItems.map((item) => (
            <div key={'listItems'+item.name}>
              <hr key={'line-break'+item.name}/>
              <div className='dish-sec-whole' key={'dish-sec-whole'+item.name}>
                <div className="dish-sec-name-price" key={'dish-sec-name-price'+item.name}>
                  <div className="dish-item item-name" key={'dish-item-name'+item.name}>{item.name}</div>
                  <div className="dish-item item-price" key={'dish-item-price'+item.name}>Rs. {item.price}/-</div>
                </div>
                {/* <img className="dish-image" src={item.image} alt={item.name}/> */}
              </div>
            </div>
          ))}
          <div key={'line-break'+menuItem.id}><hr className='dish-sec-border' key={menuItem.id+'border'}/></div>
        </div>
      ))}
    </div>)
}

export default Beverages;