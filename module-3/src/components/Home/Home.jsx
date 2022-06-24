import React, {useState} from 'react'
import mainStyles from '../../App.module.scss'
import Header from '../Header'
import Main from '../Main'


const Home = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false)

  return (
    <div className={mainStyles.mainWrapper}>
      <Header isNavbarOpen={isNavbarOpen} setIsNavbarOpen={setIsNavbarOpen}/>
      <Main isNavbarOpen={isNavbarOpen}/>
    </div>
  )
}

export default Home