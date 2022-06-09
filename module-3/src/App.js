import React, {useState} from 'react'
import './App.scss'
import Header from './components/Header'
import Main from './components/Main'
import LoginPage from './components/LoginPage/LoginPage'

function App() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false)

  return (
    <div className="App">
      <Header isNavbarOpen={isNavbarOpen} setIsNavbarOpen={setIsNavbarOpen}/>
      <Main isNavbarOpen={isNavbarOpen}/>
      <LoginPage/>  
    </div>
  )
}

export default App
