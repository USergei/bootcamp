import React from "react"
import {Route, Routes} from "react-router-dom"
import Main from "./components/Main"
import Home from "./components/Pages/Home"
import Document from "./components/Pages/Document"
import Documents from "./components/Pages/Documents"
import LoginPage from "./components/Pages/LoginPage"
import Registration from "./components/Pages/Registration"
import NotFound from "./components/Pages/NotFound"
import Projects from "./components/Pages/Projects"
import UnauthenticatedRoute from "../src/Middleware/UnauthenticatedRoute"
import AuthenticatedRoute from "../src/Middleware/AuthenticatedRoute"
import ForgotPassword from "./components/Pages/ForgotPassword"

const Links = () => {
  return (
    <Routes>
        <Route element={
            <AuthenticatedRoute>
              <Main />
            </AuthenticatedRoute>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/document">
            <Route index element={<Document />} />
            <Route path=":id" element={<Document />} />
          </Route>   
          <Route path="/documents" element={<Documents />} /> 
          <Route path="/projects" element={<Projects />} />
        </Route>
        {/* <Route element={<UnauthenticatedRoute />}> */}
          <Route path="/login" element={<LoginPage />} /> 
          <Route path="/forgot_password" element={<ForgotPassword />} /> 
          <Route path="/registration" element={<Registration />} />
        {/* </Route> */}
        <Route path="*" element={<NotFound />} /> 
    </Routes>
  )
}

export default Links
