import axios from 'axios'
import DataContext from '../DataContext'
import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

const DeleteAccountButton = () => {

    const {currentUser, setCurrentUser, currentPortfolio, setCurrentPortfolio, currentWatchlist, setCurrentWatchlist, playersInPorfolio, setPlayersInPortfolio, playersInWatchlist, setPlayersInWatchlist, idsInPortfolio, setIdsInPortfolio, idsInWatchlist, setIdsInWatchlist, searchResults, setSearchResults, selectedPlayer, setSelectedPlayer, showPlayer, players, setPlayers, users, setUsers, portfolios, setPortfolios, watchlists, setWatchlists, trades, setTrades, testAccountID, setTestAccountID, testPortfolioID, setTestPortfolioID, testWatchlistID, setTestWatchlistID} = useContext(DataContext)

    const deleteAccount = async () => {

        console.log('test user:', testAccountID)
        console.log('test portfolio:', testPortfolioID)
        console.log('test watchlist:', testWatchlistID)
        
        //deleting user
        try {
            const res = await axios.delete(`http://localhost:3001/users/${testAccountID}`)
            console.log('Response:', res.data)
          } catch (error) {
            console.error('Error deleting user:', error)
          }

        //deleting portfolio
        try {
            const res = await axios.delete(`http://localhost:3001/portfolios/${testPortfolioID}`)
            console.log('Response:', res.data)
          } catch (error) {
            console.error('Error deleting portfolio:', error)
          }

        //deleting watchlist  
        try {
            const res = await axios.delete(`http://localhost:3001/watchlists/${testWatchlistID}`)
            console.log('Response:', res.data)
          } catch (error) {
            console.error('Error deleting watchlist:', error)
          }
        }      

    return (
        
        <Button id='delete-account' onClick={deleteAccount}>Delete Account</Button>

    )
}

export default DeleteAccountButton