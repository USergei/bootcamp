import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from './components/Home'
import LoginPage from './components/LoginPage'
import Registration from './components/Registration'
import NotFound from "./components/Header/NotFound"
import UnauthenticatedRoute from './components/UnauthenticatedRoute'
import AuthenticatedRoute from './components/AuthenticatedRoute'

export default function Links() {
  return (
    <Routes>
        <Route
          path="/"
          element={
            <AuthenticatedRoute>
              <Home/>
            </AuthenticatedRoute>
          }
        />
        <Route
          path="/login"
          element={
            <UnauthenticatedRoute>
              <LoginPage/>
            </UnauthenticatedRoute>
          }
        /> 
        <Route
          path="/registration"
          element={
            <UnauthenticatedRoute>
              <Registration/>
            </UnauthenticatedRoute>
          }
        /> 
        <Route
          path="/404"
          element={
            <NotFound/>
          }
        /> 
    </Routes>
  )
}
