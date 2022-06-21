import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from './components/Home'
import LoginPage from './components/LoginPage'
import Registration from './components/Registration'

export default function Links() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/registration" element={<Registration/>}/>
    </Routes>
  )
}
