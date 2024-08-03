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
  const [currentPortfolio, setCurrentPortfolio] = useState({}) //portfolio object
  const [currentWatchlist, setCurrentWatchlist] = useState({}) //watchlist object
  const [idsInPortfolio, setIdsInPortfolio] = useState([]) //array of strings
  const [idsInWatchlist, setIdsInWatchlist] = useState([]) //array of strings
  const [playersInPorfolio, setPlayersInPortfolio] = useState([]) //array of player objects
  const [playersInWatchlist, setPlayersInWatchlist] = useState([]) //array of player objects

  // all data
  const [users, setUsers] = useState([])
  const [players, setPlayers] = useState([])
  const [portfolios, setPortfolios] = useState([])
  const [watchlists, setWatchlists] = useState([])
  const [trades, setTrades] = useState([])

  // search data, context
  const [searchResults, setSearchResults] = useState([]) //array of objects
  const [selectedPlayer, setSelectedPlayer] = useState({}) //player object

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

  useEffect(() => {
    filterPlayers()
  }, [players])

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
      // console.log('all player data on page load', res.data)
      let playerData = res.data
      setPlayers(playerData)
    } catch (error) {
      console.error('Error getting players:', error)
    }
  }

  const filterPlayers = () => {
    //console.log('current portfolio', currentPortfolio)
    //console.log('current watchlist', currentWatchlist)
    //console.log('filter, all players', players)
    if (currentPortfolio.length > 0) {
      let inPortfolio = players.filter(player => currentPortfolio[0].players.includes(player._id))
      //console.log('filter portfolio test', inPortfolio)
      setPlayersInPortfolio(inPortfolio)      
    }
    if (currentWatchlist.length > 0) {
       // watchlist filter works
      let inWatchlist = players.filter(player => currentWatchlist[0].players.includes(player._id))
      //console.log('filter watchlist test', inWatchlist)    
      setPlayersInWatchlist(inWatchlist)
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
      //console.log('current porfolio data on page load', res.data)
      let portfolioData = res.data
      // console.log('Portfolio', portfolioData)
      // console.log('Current user', currentUser)
      setIdsInPortfolio(portfolioData.players) //player id strings not player objs
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
      // console.log('current watchlist data on page load', res.data)
      let watchlistData = res.data
      // console.log('LOOK AT ME Watchlist player ids', watchlistData[0].players)
      // console.log('Current user', currentUser)
      setIdsInWatchlist(watchlistData[0].players) //player id strings not player objs  // COME BACK HERE IF WATCHLIST DOESN'T WORK
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

  // 9 main things are loading! (portfolio tbd) 
  const checkState = () => {
    console.log('Users', users)
    console.log('Portfolios', portfolios)
    console.log('Watchlists', watchlists)
    // console.log('Trades', trades)
    // console.log('Players', players)
    console.log('1. Current user', currentUser)
    console.log('2. Current portfolio', currentPortfolio)
    console.log('3. Current watchlist', currentWatchlist)
    console.log('4. Players in portfolio', playersInPorfolio)
    console.log('5. Players in watchlist', playersInWatchlist)
    console.log('6. Portfolio player ids', idsInPortfolio)
    console.log('7. Watchlist player ids', idsInWatchlist)
    console.log('8. Search results', searchResults)
    console.log('9. Selected player', selectedPlayer)
 }

// moved this into context from these routes: home, portfolio, playerlist
const showPlayer = (targetPlayer, espnID) => {
  setSelectedPlayer(targetPlayer)
  navigate(`/players/${espnID}`)
}



  return (
  <div> 
    <div>  

    <Button onClick={checkState}>Check state</Button>       

    </div>

    <div className='app'> 
      <DataContext.Provider value={{currentUser, setCurrentUser, currentPortfolio, setCurrentPortfolio, currentWatchlist, setCurrentWatchlist, playersInPorfolio, setPlayersInPortfolio, playersInWatchlist, setPlayersInWatchlist, idsInPortfolio, setIdsInPortfolio, idsInWatchlist, setIdsInWatchlist, searchResults, setSearchResults, selectedPlayer, setSelectedPlayer, showPlayer, players, setPlayers, users, setUsers, portfolios, setPortfolios, watchlists, setWatchlists, trades, setTrades}}>
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
