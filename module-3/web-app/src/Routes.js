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
import PrivateRoutes from "./Middleware/PrivateRoutes"
import ForgotPassword from "./components/Pages/ForgotPassword"

const Links = () => {
  return (
    <Routes>
        <Route element={
            <PrivateRoutes>
              <Main />
            </PrivateRoutes>
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
        <Route path="/login" element={<LoginPage />} /> 
        <Route path="/forgot_password" element={<ForgotPassword />} /> 
        <Route path="/registration" element={<Registration />} />
        <Route path="*" element={<NotFound />} /> 
    </Routes>
  )
}

export default Links
