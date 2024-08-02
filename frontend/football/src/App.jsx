import { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Routes, Route, createPath } from 'react-router-dom' 
import { BASE_URL } from './globals'
import playersArray from './data/playersArray'
import './App.css'
import axios from 'axios'
import DataContext from './DataContext'
import Login from './components/Login'
import Nav from './components/Nav'
import HomePage from './components/HomePage'
import PortfolioPage from './components/PortfolioPage'
import AccountPage from './components/AccountPage'
import PlayerDetail from './components/PlayerDetail'
import PlayerList from './components/PlayerList'
import Button from 'react-bootstrap/Button'

function App() {

  let navigate = useNavigate()

  // current user data, context
  const [currentUser, setCurrentUser] = useState({
    _id: "66a79ceaa9b2ead5607bc68b",
    username: "jslempa",
    password: "111111",
    email: "fakeemail1@gmail.com",
    image: "https://placehold.co/300/green/white",
    isLoggedIn: true,
    balance: 100,
  })
  const [currentPortfolio, setCurrentPortfolio] = useState({})
  const [currentWatchlist, setCurrentWatchlist] = useState({})
  const [playersInPorfolio, setPlayersInPortfolio] = useState([])
  const [playersInWatchlist, setPlayersInWatchlist] = useState([])

  // all data
  const [users, setUsers] = useState([])
  const [players, setPlayers] = useState([])
  const [portfolios, setPortfolios] = useState([])
  const [watchlists, setWatchlists] = useState([])
  const [trades, setTrades] = useState([])

  // search data, context
  const [searchResults, setSearchResults] = useState([])
  const [selectedPlayer, setSelectedPlayer] = useState({})

  // works!
  useEffect(() => {
    console.log('current user on page load', currentUser)
    getCurrentPortfolio()
    getCurrentWatchlist()

    getUsers()    
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
      console.log('in getCurrentUser, user to be set:', loggedInUser)
      setCurrentUser(loggedInUser)
    } catch (error) {
      console.error('Error getting users:', error)
    }
  }

   const getPlayers = async () => {
    try {
      const res = await axios.get(`http://localhost:3001/players`) 
      console.log('all player data on page load', res.data)
      let playerData = res.data

      // filter players in current portfolio

      // console.log(currentWatchlist) // empty object

      // console.log(currentWatchlist[0].players) // error getting [0].anything on page load

      // filter players in current watchlist



      setPlayers(playerData)
      //setPlayersInPortfolio()
      //setPlayersInWatchlist()
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
  const getCurrentPortfolio = async () => {
    try {
      let userID = currentUser._id
      const res = await axios.get(`http://localhost:3001/portfolios/user/${userID}`) 
      console.log('current porfolio data on page load', res.data)
      let portfolioData = res.data
      // console.log('Portfolio', portfolioData)
      // console.log('Current user', currentUser)
      setPlayersInPortfolio(portfolioData.players) //player id strings not player objs
      setCurrentPortfolio(portfolioData) // this line ?
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
  const getCurrentWatchlist = async () => {
    try {
      let userID = currentUser._id
      // console.log('UserID watchlist', userID)
      const res = await axios.get(`http://localhost:3001/watchlists/user/${userID}`) 
      console.log('current watchlist data on page load', res.data)
      let watchlistData = res.data
      // console.log('Watchlist player ids', watchlistData[0].players)
      // console.log('Current user', currentUser)
      setPlayersInWatchlist(watchlistData.players) //player id strings not player objs  // COME BACK HERE IF WATCHLIST DOESN'T WORK
      setCurrentWatchlist(watchlistData)
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
    // console.log('Users', users)
    // console.log('Portfolios', portfolios)
    // console.log('Watchlists', watchlists)
    // console.log('Trades', trades)
    console.log('Current user', currentUser)
    console.log('Current portfolio', currentPortfolio)
    console.log('Current watchlist', currentWatchlist)
    console.log('Players', players)
 }

// moved this into context from these routes: home, portfolio, playerlist
const showPlayer = (targetPlayer, espnID) => {
  setSelectedPlayer(targetPlayer)
  navigate(`/player/${espnID}`)
}

  return (
  <div> 
    <div>  
   <Button onClick={checkState}>Check state</Button>   
   {/* <Button onClick={getPortfolioByUser}>Get portfolio</Button> 
   <Button onClick={getWatchlistByUser}>Get watchlist</Button>  */}

    

    </div>

    <div className='app'> 
      <DataContext.Provider value={{currentUser, setCurrentUser, currentPortfolio, setCurrentPortfolio, currentWatchlist, setCurrentWatchlist, playersInPorfolio, setPlayersInPortfolio, playersInWatchlist, setPlayersInWatchlist, searchResults, setSearchResults, selectedPlayer, setSelectedPlayer, showPlayer, players}}>
        {/* <Login /> */}
      
      <Routes>
        <Route path='/' element={ <HomePage />}/> 
        <Route path='/portfolio' element={ <PortfolioPage />}/>
        <Route path='/account' element={ <AccountPage />}/>
        <Route path='/players' element={<PlayerList />}/>
        <Route path='/players/:espnID' element={<PlayerDetail />}/>
      </Routes>   
      <Nav />  
      </DataContext.Provider>  
    </div>
    </div>   
  )
}

export default App
