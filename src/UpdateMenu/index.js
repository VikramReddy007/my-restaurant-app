import React, { useEffect, useState } from 'react'
import Header from '../components/common/header'
// import {
//     Container, Row, Col, Form, Input, Button, Navbar, Nav,
//     NavbarBrand, NavLink, NavItem, UncontrolledDropdown,
//     DropdownToggle, DropdownMenu, DropdownItem
// } from 'reactstrap';
import env from 'react-dotenv';
import Switch from 'react-switch';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

let DB_URL = env.DB_SERVER_URL;
let productList;

const UpdateMenuHomePage = () => {
    const [searchVal, setSearchVal] = useState("");
    const [StartersVegResponse, setStartersVegResponse] = useState([]);
    const [StartersNonVegResponse, setStartersNonVegResponse] = useState([]);
    const [MainCourseVegResponse, setMainCourseVegResponse] = useState([]);
    const [MainCourseNonVegResponse, setMainCourseNonVegResponse] = useState([]);
    const [BiryaniAndRiceVegResponse, setBiryaniAndRiceVegResponse] = useState([]);
    const [BiryaniAndRiceNonVegResponse, setBiryaniAndRiceNonVegResponse] = useState([]);
    const [BeveragesResponse, setBeveragesResponse] = useState([]);
    const [searchedItems, setSearchedItems] = useState(StartersVegResponse);
    const [checked, setChecked] = useState("V");
    const [collectionName, setCollectionName] = useState("StartersVegMenu");
    const handleChange = () => {
        setChecked((menu) => menu === "V" ? "NV" : "V");
        setCollectionName((name) => name === "StartersNonVegMenu" ? "StartersVegMenu" : "StartersNonVegMenu");
    };
    // const [loaded, setLoaded] = useState(false);
    // const [productList, setProductList] = useState([]);

    let menuTypeList = ["StartersVegMenu", "StartersNonVegMenu",
        "MainCourseVegMenu", "MainCourseNonVegMenu",
        "BiryaniAndRiceVegMenu", "BiryaniAndRiceNonVegMenu", "BeveragesMenu"]

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
                console.log(resBody);
                currentResponse = resBody;
                setRespectiveState(colName, resBody);
                if (colName === 'StartersVegMenu') setSearchedItems(resBody);
            }
        }
        getRecords();
    }, [])

    // async function setProducts(){
    //     productList = {
    //         ...StartersVegResponse, ...StartersNonVegResponse,
    //         ...MainCourseVegResponse, ...MainCourseNonVegResponse,
    //         ...BiryaniAndRiceVegResponse, ...BiryaniAndRiceNonVegResponse,
    //         ...BeveragesResponse
    //     }
    //     setProducts();
    // }


    let currentResponse;

    // let RecordsFromAPI = (collectionName) => {
    //     async function getRecords() {
    //         for(colName in menuTypeList){
    //             const response = await fetch(`${DB_URL}/menu/` + menuTypeList);

    //             if (!response.ok) {
    //                 const message = `An error occurred: ${response.statusText}`;
    //                 window.alert(message);
    //                 return;
    //             }
    //             const resBody = await response.json();
    //             console.log(resBody);
    //             currentResponse = resBody;
    //             setRespectiveState(menuTypeList, resBody);
    //         }
    //     }
    //     getRecords();
    // }

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
            case 'BeveragesMenu':
                setBeveragesResponse(response);
                break;
            default: console.log("Set state for " + menuType + " not available."); break;

        }
        // "StartersVegMenu", "StartersNonVegMenu", 
        // "MainCourseVegMenu", "MainCourseNonVegMenu", 
        // "BiryaniAndRiceVegMenu", "BiryaniAndRiceNonVegMenu", "BeveragesMenu"
    }

    function handleSearchClick() {
        // if (searchVal === "") { setSearchedItems(StartersVegResponse); return; }
        // console.log("StartersVeg while searching: \n");
        // console.log(StartersVegResponse);
        // // while()
        // const filterBySearch = StartersVegResponse.filter((item) => {
        //     return item.listItems.name.toLowerCase()
        //         .includes(searchVal.toLowerCase());
        // })
        // setSearchedItems(filterBySearch);
        // console.log("Searched!")
        // // let found=false;
        setSearchedItems(getAllItemNames(StartersVegResponse));
    }

    const [selected, setSelected] = React.useState("Starters");
   function handleRadioChange(event) {
      setSelected(event.target.value);
   }

    // Function to extract all names from the "listItems" array
    const getAllItemNames = (data) => {
        const allNames = data.flatMap((item) =>
            [item.listItems.map((listItem) => [item._id, listItem.name])]
        );
        console.log(JSON.stringify(allNames));
        const finalNames = allNames.filter(item => item.toLowerCase().includes('veg') ? item : []);
        console.log(finalNames);
        return finalNames;
    };

    return (
        <>
            <Header />
            {/* <div className='max-width d-flex flex-column w-50'>
                <input className="form-control border-end-0 border rounded-pill" type="text" placeholder="search" id="example-search-input"
                    onChange={e => setSearchVal(e.target.value)} />
                <span className="input-group-append">
                    <button className="btn btn-outline-secondary bg-white border-start-0 border rounded-pill ms-n3" type="button"
                        onClick={handleSearchClick}>
                        <i className="fa fa-search"></i>
                    </button>
                </span>
            </div> */}
            <div className='max-width radio-buttons'>
                <RadioGroup
                    row
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    // value={value}
                    onChange={handleRadioChange}
                    defaultValue="Starters"
                >
                    <FormControlLabel value="Starters" control={<Radio />} label="Starters" />
                    <FormControlLabel value="MainCourse" control={<Radio />} label="MainCourse" />
                    <FormControlLabel value="BiryaniAndRice" control={<Radio />} label="BiryaniAndRice" />
                    <FormControlLabel value="Beverages" control={<Radio />} label="Beverages" />
                </RadioGroup>
            </div>
            <div className='max-width v-nv-switch'>
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
            </div>
            {renderSearchList(StartersVegResponse)}
        </>
    )
}

const renderSearchList = (searchedItems) => {
    return (
        <>
            <div className='max-width'>
                {searchedItems.map((menuItem) => (
                    <>
                        <div className='dish-category' key={menuItem.id}>
                            <h2>{menuItem.name}</h2>
                            <img className="dish-image" src={menuItem.image} alt={menuItem.name} />
                        </div>
                        {menuItem.listItems.map((item) => (
                            <>
                                <hr />
                                <div className='dish-sec-whole' key={item.id}>
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
        </>
    )
}

export default UpdateMenuHomePage;