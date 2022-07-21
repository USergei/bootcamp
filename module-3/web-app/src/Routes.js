import React from "react"
import {Route, Routes} from "react-router-dom"
import Main from "./components/Main"
import Home from "./components/Home"
import Editor from "./components/Pages/Editor"
import LoginPage from "./components/Pages/LoginPage"
import Registration from "./components/Pages/Registration"
import NotFound from "./components/Pages/NotFound"
import UnauthenticatedRoute from "./components/UnauthenticatedRoute"
import AuthenticatedRoute from "./components/AuthenticatedRoute"
import ForgotPassword from "./components/ForgotPassword"

const Links = () => {
  return (
    <Routes>
        <Route
          path="/"
          element={
            <AuthenticatedRoute>
              <Main>
                <Home/>
              </Main>
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
          path="/forgot_password"
          element={
            <UnauthenticatedRoute>
              <ForgotPassword/>
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
          path="/editor"
          element={
            <AuthenticatedRoute>
              <Main>
                <Editor/>
              </Main>
            </AuthenticatedRoute>
          }
        /> 
        <Route
          path="*"
          element={
            <NotFound/>
          }
        /> 
    </Routes>
  )
}

export default Links
