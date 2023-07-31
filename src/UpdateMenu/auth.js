import React, {useState, useEffect} from 'react';
import bcrypt from 'bcryptjs';

const Authenticate = () => {

    const [passwordValue, setPasswordValue] = useState();
    const [passwordHashFromDB, setPasswordHashFromDB] = useState();
    const [passwordVerified, setPasswordVerified] = useState(false);

    // const authenticateUser = (password) => {
    //     // let passwordHash = bcrypt.hash(password, 12);
    //     console.log("Password hash : " + passwordHash);
    //     setPasswordVerified(passwordHash === passwordHashFromDB);
    // }

    useEffect(() => {
        async function fetchPassHash() {
            const response = await fetch(`http://localhost:5000/getPassword`);
            if (!response.ok) {
                console.log('Couldn\'t fetch password hash from db');
                return;
            }
            let resBody = await response.json();
            console.log(resBody.map((item) => item.menuUpdatePassword));
            setPasswordHashFromDB(resBody.map((item) => item.menuUpdatePassword));
        }
        fetchPassHash();
    }, [])

    useEffect(() => {
        console.log(passwordValue);
    }, [passwordValue])

    function onSubmit(){
        let passwordHash = bcrypt.hash(passwordValue, 12);
        console.log("Password hash : " + passwordHash);
        setPasswordVerified(passwordHash === passwordHashFromDB);
    }

    const renderComponent = () => {
        if(!passwordVerified){
            return(
                <div>
                    <input placeholder='Password' onChange={e => setPasswordValue(e.target.value)}/>
                    <button onSubmit={onSubmit}>Login</button>
                </div>
            )
        }
    }

  return (
        <div>{renderComponent()}</div>
    )
}

export default Authenticate;