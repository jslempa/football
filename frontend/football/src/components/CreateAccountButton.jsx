import axios from 'axios'
import DataContext from '../DataContext'
import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

const CreateAccountButton = () => {

    const {currentUser, setCurrentUser, currentPortfolio, setCurrentPortfolio, currentWatchlist, setCurrentWatchlist, playersInPorfolio, setPlayersInPortfolio, playersInWatchlist, setPlayersInWatchlist, idsInPortfolio, setIdsInPortfolio, idsInWatchlist, setIdsInWatchlist, searchResults, setSearchResults, selectedPlayer, setSelectedPlayer, showPlayer, players, setPlayers, users, setUsers, portfolios, setPortfolios, watchlists, setWatchlists, trades, setTrades, testAccountID, setTestAccountID, testPortfolioID, setTestPortfolioID, testWatchlistID, setTestWatchlistID} = useContext(DataContext)

    const createAccount = async () => {

        let newUserID = ''
        let newPortfolioID = ''
        let newWatchlistID = ''
        
        //creating new user
        const newUser = {
            username: 'cbratton',
            password: '123456',
            email: 'www.creedthoughts.gov',
            image: 'https://i.imgur.com/wMhWxZM.png',
            isLoggedIn: false,
            balance: 0 
        }
        try {
            const res = await axios.post('http://localhost:3001/users', newUser)
            console.log('Response:', res.data)
            newUserID = res.data.user._id
            setTestAccountID(newUserID)
        } catch (error) {
            console.error('Error creating user', error)
        }

        //creating new portfolio
        const newPortfolio = {
            user: newUserID,
            players: [],
            value: 0
        }
        try {
            const res = await axios.post('http://localhost:3001/portfolios', newPortfolio)
            console.log('Response:', res.data)
            newPortfolioID = res.data.portfolio._id
            setTestPortfolioID(newPortfolioID)
        } catch (error) {
            console.error('Error creating portfolio', error)
        }

        //creating new watchlist
        const newWatchlist = {
            user: newUserID,
            players: []
        }
        try {
            const res = await axios.post('http://localhost:3001/watchlists', newWatchlist)
            console.log('Response:', res.data)
            newWatchlistID = res.data.watchlist._id
            setTestWatchlistID(newWatchlistID)
        } catch (error) {
            console.error('Error creating watchlist', error)
        }
      }

    return (
        
        <Button id='create-account' onClick={createAccount}>Create Account</Button>

    )
}

export default CreateAccountButton