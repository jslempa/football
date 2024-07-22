import { useState } from 'react'
import { Routes, Route } from 'react-router-dom' 
import './App.css'
import HomePage from './components/HomePage'
import PortfolioPage from './components/PortfolioPage'
import AccountPage from './components/AccountPage'

function App() {

  return (
    <div className='app'> 
      <Routes>
        <Route path='/' element={ <HomePage />}/>
        <Route path='/portfolio' element={ <PortfolioPage />}/>
        <Route path='/account' element={ <AccountPage />}/>
      </Routes>     
    </div>
  )
}

export default App
