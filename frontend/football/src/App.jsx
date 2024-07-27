import { useState } from 'react'
import { Routes, Route } from 'react-router-dom' 
import { BASE_URL } from './globals'
import playersArray from './data/playersArray'
import './App.css'
import axios from 'axios'
import DataContext from './DataContext'
import HomePage from './components/HomePage'
import PortfolioPage from './components/PortfolioPage'
import AccountPage from './components/AccountPage'

function App() {

  const [players, setPlayers] = useState([])
  const [rookies, setRookies] = useState([])


  const getAllPlayers = async () => {
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
      playerData = playerData.filter(player => player.pos === 'QB' || player.pos === 'RB' || player.pos === 'WR' || player.pos === 'TE')
      setPlayers(playerData)
    } catch (error) {
      console.error(error)
    }
  }

  const uploadPlayers = async () => {
    await players.forEach(player => {
      axios.post('http://localhost:3001/players', {
        espnID: player.espnID,
        name: player.espnName,
        image: player.espnHeadshot,
        position: player.pos,
        team: player.team,
        age: player.age      
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
    })
  }

  // WORKS
  const getRookies = async () => {
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
    console.log(playersArray[0])
  }

  const logRookies = () => {
    console.log(rookies)
  }

  const makeRookies = async () => {
    await rookies.forEach(rookie => {
      const response = axios.put(`http://localhost:3001/players/espn/${rookie.espnID}`, {
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

      <button onClick={getRookies}>Get rookies</button>
      {/* <button onClick={test}>Test</button> */}
      <button onClick={makeRookies}>Make rookies</button>

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
