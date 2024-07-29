import { useEffect, useState, useContext } from 'react'
import { Routes, Route, createPath } from 'react-router-dom' 
import { BASE_URL } from './globals'
import playersArray from './data/playersArray'
import './App.css'
import axios from 'axios'
import DataContext from './DataContext'
import Login from './components/Login'
import HomePage from './components/HomePage'
import PortfolioPage from './components/PortfolioPage'
import AccountPage from './components/AccountPage'
import Button from 'react-bootstrap/Button'


function App() {

  const test = null

  // all players loaded
  // rookies set
  // set stats

  const [users, setUsers] = useState([])
  const [currentUser, setCurrentUser] = useState({})
  const [players, setPlayers] = useState([])
  const [portfolios, setPortfolios] = useState([])
  const [watchlists, setWatchlists] = useState([])
  const [trades, setTrades] = useState([])

  useEffect(() => {
    getUsers()
    getCurrentUser()
    getPlayers()
    getPortfolios()
    getWatchlists()
    getTrades() 
  }, [])  

  const getUsers = async () => {
    try {
      const res = await axios.get(`http://localhost:3001/users`) 
      let userData = res.data
      setUsers(userData)
    } catch (error) {
      console.error('Error getting users:', error)
    }
  }

  const getCurrentUser = async () => {
    try {
      const res = await axios.get(`http://localhost:3001/users`) 
      let userData = res.data
      let loggedInUser = userData.filter(user => user.isLoggedIn === true)
      console.log('Logged in user:', loggedInUser)
      setCurrentUser(loggedInUser)
    } catch (error) {
      console.error('Error getting users:', error)
    }
  }

   const getPlayers = async () => {
    try {
      const res = await axios.get(`http://localhost:3001/players`) 
      let playerData = res.data
      setPlayers(playerData)
    } catch (error) {
      console.error('Error getting players:', error)
    }
  }

  const getPortfolios = async () => {
    try {
      const res = await axios.get(`http://localhost:3001/portfolios`) 
      let portfolioData = res.data
      setPortfolios(portfolioData)
    } catch (error) {
      console.error('Error getting portfolios:', error)
    }
  }

  // Works!!!
  const getPortfolioByUser = async () => {
    try {
      let userID = currentUser[0]._id
      console.log('UserID', userID)
      const res = await axios.get(`http://localhost:3001/portfolios/user/${userID}`) 
      let portfolioData = res.data
      console.log('Portfolio', portfolioData)
      console.log('Current user', currentUser)
    } catch (error) {
      console.error('Error getting portfolios:', error)
    }
  }

  const getWatchlists = async () => {
    try {
      const res = await axios.get(`http://localhost:3001/watchlists`) 
      let watchlistData = res.data
      setWatchlists(watchlistData)
    } catch (error) {
      console.error('Error getting watchlists:', error)
    }
  }

  // Works!!!
  const getWatchlistByUser = async () => {
    try {
      let userID = currentUser[0]._id
      console.log('UserID', userID)
      const res = await axios.get(`http://localhost:3001/watchlists/user/${userID}`) 
      let watchlistData = res.data
      console.log('Watchlist', watchlistData)
      console.log('Current user', currentUser)
    } catch (error) {
      console.error('Error getting watchlists:', error)
    }
  }

  const getTrades = async () => {
    try {
      const res = await axios.get(`http://localhost:3001/trades`) 
      let tradeData = res.data
      setTrades(tradeData)
    } catch (error) {
      console.error('Error getting trades:', error)
    }
  }

  const checkState = () => {
    console.log('Users', users)
    console.log('Players', players)
    console.log('Portfolios', portfolios)
    console.log('Watchlists', watchlists)
    console.log('Trades', trades)
    console.log('Current user', currentUser)
 }

  return (
  <div> 
    <div>  
   <Button onClick={checkState}>Check state</Button>     

   <Button onClick={getPortfolioByUser}>Get portfolio</Button> 
   <Button onClick={getWatchlistByUser}>Get watchlist</Button> 

    </div>

    <div className='app'> 
      <DataContext.Provider value={{}}>
        {/* <Login /> */}
      <Routes>
        <Route path='/' element={ <HomePage user={currentUser}/>}/>
        <Route path='/portfolio' element={ <PortfolioPage user={currentUser} />}/>
        <Route path='/account' element={ <AccountPage user={currentUser}/>}/>
      </Routes>   
      </DataContext.Provider>  
    </div>
    </div>   
  )
}

export default App
