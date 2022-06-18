import React from 'react';
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import App from './App'
import LoginPage from './components/LoginPage'
import Registration from './components/Registration'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
  <React.StrictMode>
    <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/registration" element={<Registration/>}/>
    </Routes>
  </React.StrictMode>
</BrowserRouter>
);

reportWebVitals();
