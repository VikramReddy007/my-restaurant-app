import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import LaunchPage from './components/launchpage';
import HomePage from './pages/home/index.js';
import UpdateMenuHomePage from './UpdateMenu';
import ErrorDemo from './errorDemo';
import Authenticate from './UpdateMenu/auth';
import ProtectedRoute from './UpdateMenu/ProtectedRoute';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <BrowserRouter basename={'/'}>
    <Routes>
      <Route path='/auth' element={<Authenticate />} />
      <Route path='/' element={<LaunchPage />}></Route>
      <Route path='/menu' element={<HomePage />}></Route>
      <Route path='/updateMenu' element={
        <ProtectedRoute>
          <UpdateMenuHomePage />
        </ProtectedRoute>
      } />
      <Route path="*" element={<ErrorDemo />} />
    </Routes>
  </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();