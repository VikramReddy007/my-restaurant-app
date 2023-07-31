import React, { useEffect, useState, useRef } from 'react'
import Header from '../components/common/header';
import env from 'react-dotenv';
import Switch from 'react-switch';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

let DB_URL = env.DB_SERVER_URL;

const UpdateMenuHomePage = () => {
    const [StartersVegResponse, setStartersVegResponse] = useState([]);
    const [StartersNonVegResponse, setStartersNonVegResponse] = useState([]);
    const [MainCourseVegResponse, setMainCourseVegResponse] = useState([]);
    const [MainCourseNonVegResponse, setMainCourseNonVegResponse] = useState([]);
    const [BiryaniAndRiceVegResponse, setBiryaniAndRiceVegResponse] = useState([]);
    const [BiryaniAndRiceNonVegResponse, setBiryaniAndRiceNonVegResponse] = useState([]);
    const [BeveragesResponse, setBeveragesResponse] = useState([]);
    const [checked, setChecked] = useState("Veg");
    const [currentMenu, setCurrentMenu] = useState([]);
    const [selected, setSelected] = useState("Starters");
    const [itemNewPrice, setItemNewPrice] = useState("");
    const [itemToUpdate, setItemToUpdate] = useState("");
    const [dbUpdate, setDbUpdate] = useState("");
    const ref = useRef(null);
    const [showLoading, setShowLoading] = useState(true);

    useEffect(() => {
        async function getRecords() {
            for (let colName of menuTypeList) {
                const response = await fetch(`${DB_URL}/menu/` + colName);

                if (!response.ok) {
                    const message = `An error occurred: ${response.statusText}`;
                    window.alert(message);
                    return;
                }
                const resBody = await response.json();
                setRespectiveState(colName, resBody);
            }
            setShowLoading(false);
        }
        getRecords();
        // eslint-disable-next-line
    }, [dbUpdate])

    useEffect(() => {
        if (StartersVegResponse != null) {
            setCurrentMenuForRender();
        }
        // eslint-disable-next-line
    }, [checked, selected, StartersVegResponse, StartersNonVegResponse, MainCourseVegResponse, MainCourseNonVegResponse, BiryaniAndRiceVegResponse,
        BiryaniAndRiceNonVegResponse, BeveragesResponse])

    const handleChange = () => {
        setChecked((menu) => menu === "Veg" ? "NonVeg" : "Veg");
    };

    let menuTypeList = ["StartersVegMenu", "StartersNonVegMenu",
        "MainCourseVegMenu", "MainCourseNonVegMenu",
        "BiryaniAndRiceVegMenu", "BiryaniAndRiceNonVegMenu", "Beverages"]

    function setCurrentMenuForRender() {
        let currentSelection = selected + checked + "Menu";
        switch (currentSelection) {
            case 'StartersVegMenu':
                setCurrentMenu(StartersVegResponse);
                break;

            case 'StartersNonVegMenu':
                setCurrentMenu(StartersNonVegResponse);
                break;

            case 'MainCourseVegMenu':
                setCurrentMenu(MainCourseVegResponse);
                break;

            case 'MainCourseNonVegMenu':
                setCurrentMenu(MainCourseNonVegResponse);
                break;

            case 'BiryaniAndRiceVegMenu':
                setCurrentMenu(BiryaniAndRiceVegResponse);
                break;

            case 'BiryaniAndRiceNonVegMenu':
                setCurrentMenu(BiryaniAndRiceNonVegResponse);
                break;

            case 'BeveragesVegMenu': case 'BeveragesNonVegMenu':
                setCurrentMenu(BeveragesResponse);
                break;
            default: setCurrentMenu(StartersVegResponse);
        }
    }

    function setRespectiveState(menuType, response) {
        switch (menuType) {
            case 'StartersVegMenu':
                setStartersVegResponse(response);
                break;
            case 'StartersNonVegMenu':
                setStartersNonVegResponse(response);
                break;
            case 'MainCourseVegMenu':
                setMainCourseVegResponse(response);
                break;
            case 'MainCourseNonVegMenu':
                setMainCourseNonVegResponse(response);
                break;
            case 'BiryaniAndRiceVegMenu':
                setBiryaniAndRiceVegResponse(response);
                break;
            case 'BiryaniAndRiceNonVegMenu':
                setBiryaniAndRiceNonVegResponse(response);
                break;
            case 'Beverages':
                setBeveragesResponse(response);
                break;
            default: console.log("Set state for " + menuType + " not available."); break;

        }
    }

    function handleRadioChange(event) {
        setSelected(event.target.value);
    }

    async function onSubmit(e) {
        e.preventDefault();
        const editedPrice = {
            name: itemToUpdate,
            newPrice: itemNewPrice
        };

        if (editedPrice.newPrice === '') {
            window.alert('Please enter a value!');
            setItemToUpdate("");
            disableButton(editedPrice.name);
            return;
        }
        document.getElementById(itemToUpdate + 'button').value = 'Updating...';
        let collectionName;
        collectionName = selected === 'Beverages' ? "Beverages" : selected + checked + 'Menu';
        // This will send a put request to update the data in the database.
        const response = await fetch(`${env.DB_SERVER_URL}/updateItemPrice/` + collectionName, {
            method: "PUT",
            body: JSON.stringify(editedPrice),
            headers: {
                'Content-Type': 'application/json'
            },
        });

        if (!response.ok) {
            const message = `An error occurred: ${response.statusText}`;
            window.alert(message);
            return;
        }
        setDbUpdate(Date.now());
        document.getElementById(itemToUpdate + 'newPrice').value = '';
        setItemToUpdate("");
        setItemNewPrice("");
        setShowLoading(true);
    }

    const setNewPriceValueAndItemName = (e, name) => {
        if (e.target.value != null) {
            setItemToUpdate(name);
            setItemNewPrice(e.target.value);
            // return;
        }
    }

    const disableButton = (itemName) => {
        return !(itemToUpdate.includes(itemName));
    }

    const renderMenuList = (searchedItems) => {

        // if (!searchedItems.length) {
        if(showLoading){
            return (
                <div align={"center"}>
                    <div className='loader'></div>
                </div>
            )
        }

        return (
            <>
                <div className='max-width max-width-menu'>
                    {searchedItems.map((menuItem) => (
                        <div key={'menuItem-div'+menuItem.name}>
                            <div className='dish-category' key={menuItem._id} id={menuItem._id}>
                                <h2 key={'heading1' + menuItem.name}>{menuItem.name}</h2>
                                <img key={'image' + menuItem} className="dish-image" src={menuItem.image} alt={menuItem.name} />
                            </div>
                            {menuItem.listItems.map((item) => (
                                <div key={'listItems-div'+item.name}>
                                    <hr />
                                    <div className='dish-sec-whole' key={'dish-sec-whole' + item.name}>
                                        <div className="row" key={'dish-sec-name-price' + item.name}>
                                            <div className="dish-item item-name column" id={item.name} key={'dish-item-name' + item.name}>{item.name}</div>
                                            <div className="dish-item item-price column" key={'dish-item-price' + item.name}>Rs. {item.price}/-</div>
                                            <input ref={ref} id={item.name + 'newPrice'} type='text' placeholder='New Price' className='dish-item new-price column'
                                                onChange={event => setNewPriceValueAndItemName(event, item.name)}
                                                key={'input-new-price' + item.name}
                                            ></input>
                                            <button key={'update-button'+item.name} id={item.name + "button"} disabled={disableButton(item.name)} className='column' type='submit' onClick={onSubmit}>Update</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div key={'line-break' + menuItem.id}><hr className='dish-sec-border' key={menuItem.id + 'border'}/></div>
                        </div>
                    ))}
                </div>
            </>
        )
    }

    return (
        <>
            <Header />
            <div className='max-width-menu radio-buttons'>
                <RadioGroup
                    row
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    onChange={handleRadioChange}
                    defaultValue="Starters"
                >
                    <FormControlLabel value="Starters" control={<Radio />} label="Starters" />
                    <FormControlLabel value="MainCourse" control={<Radio />} label="MainCourse" />
                    <FormControlLabel value="BiryaniAndRice" control={<Radio />} label="BiryaniAndRice" />
                    <FormControlLabel value="Beverages" control={<Radio />} label="Beverages" />
                </RadioGroup>
            </div>
            <div className='max-width-menu v-nv-switch switch-dish-type' ket='menu'>
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
                    checked={checked === "NonVeg"}
                    onChange={handleChange}
                    className="react-switch"
                    id="material-switch"
                    disabled={selected === 'Beverages' ? true : false}
                />
                <p>NON-VEG</p>
            </div>
            {renderMenuList(currentMenu)}
        </>
    )

}


export default UpdateMenuHomePage;