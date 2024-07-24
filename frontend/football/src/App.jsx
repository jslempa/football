import { useState } from 'react'
import { Routes, Route } from 'react-router-dom' 
import { BASE_URL } from './globals'
import './App.css'
import axios from 'axios'
import DataContext from './DataContext'
import HomePage from './components/HomePage'
import PortfolioPage from './components/PortfolioPage'
import AccountPage from './components/AccountPage'

function App() {

  const [players, setPlayers] = useState([])

  const test = async () => {
    try {
      const res = await axios({
        method: 'GET',
        url: `${BASE_URL}/getNFLPlayerList`,
        headers: {
          'x-rapidapi-key': '426ae3acd0msh3d3c5c1d0c82ea5p1b3459jsn490eccaf5ec5',
          'x-rapidapi-host': 'tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com'
        }
      }
    )
      console.log(res.data.body)
      let playerData = res.data.body
      let tightEnds = playerData.filter(player => player.pos === 'TE')
      console.log(tightEnds)
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
      <DataContext.Provider value={{test}}>
      <Routes>
        <Route path='/' element={ <HomePage />}/>
        <Route path='/portfolio' element={ <PortfolioPage />}/>
        <Route path='/account' element={ <AccountPage />}/>
      </Routes>   
      </DataContext.Provider>  
    </div>
    </div>   
  )
}

export default App
