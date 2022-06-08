import React, {useState} from 'react'
import './App.scss'
import Header from './components/Header'
import Main from './components/Main'

function App() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false)

  return (
    <div className="App">
      <Header isNavbarOpen={isNavbarOpen} setIsNavbarOpen={setIsNavbarOpen}/>
      <Main isNavbarOpen={isNavbarOpen}/>  
    </div>
  )
}

export default App
