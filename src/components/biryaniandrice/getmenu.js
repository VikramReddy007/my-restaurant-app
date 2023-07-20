import React, { useEffect, useState } from "react";

let responseFromAPI;

const Record = () => (
  <div>
    {responseFromAPI.map((menuItem) => (
      <>
        <div className='dish-category'>
          <h2>{menuItem.name}</h2>
          {/* <img className="dish-image" src={menuItem.image} alt={menuItem.name} /> */}
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
);

export default function GetMenu() {
  const [records, setRecords] = useState([]);
  // This method fetches the records from the database.
  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:5000/record/`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
      const records = await response.json();
      responseFromAPI = records;
      setRecords(records);
    }

    getRecords();
    return;
  }, [records.length]);

  // This method will delete a record
  async function deleteRecord(id) {
    await fetch(`http://localhost:5000/${id}`, {
      method: "DELETE"
    });

    const newRecords = records.filter((el) => el._id !== id);
    setRecords(newRecords);
  }

  // This method will map out the records on the table
  function recordList() {
    return records.map((record) => {
      return (
        <Record
          record={record}
          deleteRecord={() => deleteRecord(record._id)}
          key={record._id}
        />
      );
    });
  }

  // This following section will display the table with the records of individuals.
  return (
    <div>
      <h3>Record List</h3>
      <table className="table table-striped" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Level</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{recordList()}</tbody>
      </table>
    </div>
  );
}