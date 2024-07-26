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
  const [rookies, setRookies] = useState([])


  const testRookies = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/getNFLPlayerList`, {
        headers: {
          'x-rapidapi-key': '426ae3acd0msh3d3c5c1d0c82ea5p1b3459jsn490eccaf5ec5',
          'x-rapidapi-host': 'tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com'
        }, 
      }
    )
      console.log(res.data.body)
      let playerData = res.data.body
      let rookiePlayerData = playerData.filter(player => player.exp === 'R' && (player.pos === 'QB' || player.pos === 'RB' || player.pos === 'WR' || player.pos === 'TE'))
      setRookies(rookiePlayerData)
    } catch (error) {
      console.error(error)
    }
  }



  // const setRookies = async () => {
  //   try {
  //     let rookies = players.filter(player => player.exp === 'R');
  
  //     // Create an array of promises
  //     const promises = rookies.map(rookie => 
  //       axios.put(`http://localhost:3001/players/${rookie.espnID}`, {
  //         isRookie: true
  //       })
  //     );
  
  //     // Await all promises
  //     await Promise.all(promises);
  
  //     console.log('Rookies set');
  //   } catch (error) {
  //     console.error('Error setting rookies:', error);
  //   }
  // };
  const test = () => {
    console.log('test')
  }

  const logRookies = () => {
    console.log(rookies)
  }

  const makeRookies = async () => {
    await rookies.forEach(rookie => {
      const response = axios.put(`http://localhost:3001/players/${rookie.espnID}`, {
        isRookie: true
      })
    })
    console.log('Rookies set')  
  }

  // const makeRookies = async () => {
  //   try {
  //     const promises = rookies.map(rookie => {
  //       return axios.patch(`http://localhost:3001/players/${rookie.espnID}`, {
  //         isRookie: true
  //       });
  //     });
  
  //     await Promise.all(promises);
  //     console.log('Rookies set');
  //   } catch (error) {
  //     console.error('Error setting rookies:', error);
  //   }
  // };
  


  // all players loaded
  // set stats
  // set rookie

  return (
  <div> 
    <div>

      <button onClick={testRookies}>Get players</button>
      <button onClick={logRookies}>Log rookies</button>
      <button onClick={makeRookies}>Set rookies</button>

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
