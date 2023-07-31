import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './auth.css'
import Header from '../components/common/header';
import env from 'react-dotenv';

const Authenticate = () => {

    const [passwordValue, setPasswordValue] = useState();
    const navigate = useNavigate();
    const [passwordInputType, setPasswordInputType] = useState("password");

    const onSubmit = async () => {
        const passwordEntered = {
            password: passwordValue
        };
        const response = await fetch(`${env.DB_SERVER_URL}/getPassword`, {
            method: "POST",
            body: JSON.stringify(passwordEntered),
            headers: {
                'Content-Type': 'application/json'
            },
        }
        );
        if (!response.ok) {
            if (response.status === 401) {
                alert('Invalid Password. Please enter correct password!');
                navigate('/auth');
                return;
            }
            console.log('Couldn\'t fetch password hash from db');
            alert('Error while connecting to server. Please try again after sometime!')
            return;
        }
        let resBody = await response.json();
        console.log(resBody.map((item) => item.menuUpdatePassword));
        sessionStorage.clear();
        sessionStorage.setItem('user-token', resBody.map((item) => item.menuUpdatePassword));
        navigate('/updateMenu');
    }

    const showPassword = () => {
        passwordInputType === 'password' ? setPasswordInputType('text') : setPasswordInputType('password');
      }

    return (
        <>
            <Header />
            <div className="login-page">
                <h2>Login</h2>
                <div className="form">
                    <span className="login-form">
                        <input id='passwordField' autoComplete="off" type={passwordInputType} placeholder='Password' onChange={e => setPasswordValue(e.target.value)} />
                        <div className='showPassCheckBox'><input type="checkbox" onClick={showPassword}/>Show password</div>
                        <button onClick={onSubmit}>login</button>
                    </span>
                </div>
            </div>
        </>
    )
}

export default Authenticate;