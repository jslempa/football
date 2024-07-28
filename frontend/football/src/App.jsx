import { useState } from 'react'
import { Routes, Route, createPath } from 'react-router-dom' 
import { BASE_URL } from './globals'
import playersArray from './data/playersArray'
import './App.css'
import axios from 'axios'
import DataContext from './DataContext'
import HomePage from './components/HomePage'
import PortfolioPage from './components/PortfolioPage'
import AccountPage from './components/AccountPage'

function App() {

  const [seasonStats, setSeasonStats] = useState([])

  const [players, setPlayers] = useState([])
  const [QBs, setQBs] = useState([])
  const [nonQBs, setNonQBs] = useState([])

  const [gamesPlayed, setGamesPlayed] = useState(0)
  const [passing, setPassing] = useState({})
  const [rushing, setRushing] = useState({})
  const [receiving, setReceiving] = useState({})
  
  // gets player objects from my db and sets them in state
  const getAllPlayersFromDB = async () => {
    try {
      const res = await axios.get(`http://localhost:3001/players`)
      let playerData = res.data
      let quarterbacks = playerData.filter(player => player.position === 'QB')
      let nonQBs = playerData.filter(player => player.position === 'RB' || player.position === 'WR' || player.position === 'TE')
      setPlayers(playerData)
      setQBs(quarterbacks)
      setNonQBs(nonQBs)
    } catch (error) {
      console.error('Error fetching players:', error)
    }
  }  

  const uploadStats = () => {
    for (const player of players) {
      getStats(player)
      assignStats(player)
      setGamesPlayed(0)
      setPassing([])
      setRushing([])
      setReceiving([])
    }
  }

  // gets stats from API and sets them in state
  const getStats = async (player) => {    
      try {
        const res = await axios.get(`${BASE_URL}/getNFLPlayerInfo`, {
          headers: {
            'x-rapidapi-key': '426ae3acd0msh3d3c5c1d0c82ea5p1b3459jsn490eccaf5ec5',
            'x-rapidapi-host': 'tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com'
          },
          params: {
            playerID: player.espnID,
            getStats: true
          }
        })
        let playerStats = res.data.body.stats
        setGamesPlayed(playerStats.gamesPlayed)
        if (playerStats.Passing) {
          setPassing(playerStats.Passing)
        }
        if (playerStats.Rushing) {
          setRushing(playerStats.Rushing)
        }
        if (playerStats.Receiving) {
          setReceiving(playerStats.receiving)
        }        
      } catch (error) {
        console.error(error)
      }  
  }

  const getStatsTest = async () => {    
    try {
      const res = await axios.get(`${BASE_URL}/getNFLPlayerInfo`, {
        headers: {
          'x-rapidapi-key': '426ae3acd0msh3d3c5c1d0c82ea5p1b3459jsn490eccaf5ec5',
          'x-rapidapi-host': 'tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com'
        },
        params: {
          playerID: 12483,
          getStats: true
        }
      })
      let playerStats = res.data.body.stats
      console.log(playerStats)
      setSeasonStats(playerStats)
    } catch (error) {
      console.error(error)
    }  
}

// takes the data in state and adds it to player in my DB
const assignStats = async (player) => {
  const res = await axios.put(`http://localhost:3001/players/espn/${player.espnID}`, {
    stats: {
      gamesPlayed: gamesPlayed,
      passAttempts: passing.passAttempts,
      passCompletions: passing.passCompletions,
      passYds: passing.passYds,
      passTDs: passing.passTD,
      int: passing.int,
      rushAttempts: rushing.carries,
      rushYds: rushing.rushYds,
      rushTD: rushing.rushTD,
      targets: receiving.targets,
      receptions: receiving.receptions,
      recYds: receiving.recYds,
      recTD: receiving.recTD
    }
  })
  .then(response => {
    console.log(response.data)
  })
  .catch(error => {
    console.error('Error fetching data:', error)
  })
}

  const assignStatsQB = async (QB) => {
    const res = await axios.put(`http://localhost:3001/players/espn/${QB.espnID}`, {
      stats: {
        gamesPlayed: seasonStats.gamesPlayed,
        passAttempts: seasonStats.Passing.passAttempts,
        passCompletions: seasonStats.Passing.passCompletions,
        passYds: seasonStats.Passing.passYds,
        passTDs: seasonStats.Passing.passTD,
        int: seasonStats.Passing.int,
        rushAttempts: seasonStats.Rushing.carries,
        rushYds: seasonStats.Rushing.rushYds,
        rushTD: seasonStats.Rushing.rushTD
      }
    })
    .then(response => {
      console.log(response.data)
    })
    .catch(error => {
      console.error('Error fetching data:', error)
    })
  }

  const assignStatsNonQB = async (nonQB) => {
    const res = await axios.put(`http://localhost:3001/players/espn/${nonQB.espnID}`, {
      stats: {
        gamesPlayed: seasonStats.gamesPlayed,
        rushAttempts: seasonStats.Rushing.carries,
        rushYds: seasonStats.Rushing.rushYds,
        rushTD: seasonStats.Rushing.rushTD,
        targets: seasonStats.Receiving.targets,
        receptions: seasonStats.Receiving.receptions,
        recYds: seasonStats.Receiving.recYds,
        recTD: seasonStats.Receiving.recTD
      }
    })
    .then(response => {
      console.log(response.data)
    })
    .catch(error => {
      console.error('Error fetching data:', error)
    })
  }

  const checkState = () => {
    console.log('QB', QBs)
    console.log('Non-QBs', nonQBs)
    console.log('Stats', seasonStats)
  }
  
  const test = () => {
    console.log(stats)
  }

  // all players loaded
  // rookies set
  // set stats
  

  return (
  <div> 
    <div>

      <button onClick={getAllPlayersFromDB}>Get players</button>

      <h2>Testing</h2>

      <button onClick={getStatsTest}>Get stats</button>
      <button onClick={checkState}>Check state</button>

      <h2>Upload stats</h2>

      <button onClick={uploadStats}>Upload stats</button>


      {/* <button onClick={getAllPlayersFromDB}>Get from DB</button> */}

      {/* <button onClick={getStats}>Get stats</button> */}

      {/* <button onClick={getIndividualPlayersFromAPI}>Get from API and log stats</button> */}

      {/* <button onClick={putStatsintoDB}>Upload stats</button> */}

      

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
