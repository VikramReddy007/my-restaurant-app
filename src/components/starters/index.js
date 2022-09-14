import React from 'react'
import "./starters.css"
import '../../styles/commonClasses.css'
import {RadioGroup, FormControlLabel, Radio } from '@mui/material';


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

const Starters = () => {
  return (
    <div className="menu-items max-width">
        <input type="radio" id="Veg" name="age" value="V" />
        <label for="age1">VEG</label><br/>
        <input type="radio" id="NonVeg" name="age" value="NV" />
        <label for="age2">NON-VEG</label><br/>  
        <input type="radio" id="Both" name="age" value="B" />
        <label for="age3">BOTH</label><br/><br/>
        {/* <input type="submit" value="Submit" /> */}

      <RadioGroup name="use-radio-group" defaultValue="first">
        <FormControlLabel value="first" label="First" control={<Radio />} />
        <FormControlLabel value="second" label="Second" control={<Radio />} />
      </RadioGroup>

        <div className="starter-items">
          {VegMenu.map((menu) =>
            <div className="menu-item">{menu.name}</div>
          )}
        </div>
      </div>
  )
}

export default Starters;