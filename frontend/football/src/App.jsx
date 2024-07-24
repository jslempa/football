import { useState } from 'react'
import { Routes, Route } from 'react-router-dom' 
import { BASE_URL } from './globals'
import './App.css'
import axios from 'axios'
import HomePage from './components/HomePage'
import PortfolioPage from './components/PortfolioPage'
import AccountPage from './components/AccountPage'

function App() {

  const options = {
    method: 'GET',
    url: 'https://tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com/getNFLPlayerList',
    headers: {
      'x-rapidapi-key': '426ae3acd0msh3d3c5c1d0c82ea5p1b3459jsn490eccaf5ec5',
      'x-rapidapi-host': 'tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com'
    }
  }


  const test = async () => {
    try {
      const res = await axios({
        method: 'GET',
        url: 'https://tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com/getNFLPlayerList',
        headers: {
          'x-rapidapi-key': '426ae3acd0msh3d3c5c1d0c82ea5p1b3459jsn490eccaf5ec5',
          'x-rapidapi-host': 'tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com'
        }
      }
    )
      console.log(res.data)
    } catch (error) {
      console.error(error)
    }
  }


  return (
  <div> 
    <div>

      <button onClick={test}>Click me</button>

    </div>

    <div className='app'> 
      <Routes>
        <Route path='/' element={ <HomePage />}/>
        <Route path='/portfolio' element={ <PortfolioPage />}/>
        <Route path='/account' element={ <AccountPage />}/>
      </Routes>     
    </div>
    </div>   
  )
}

export default App
