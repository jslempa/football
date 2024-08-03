import axios from 'axios'
import DataContext from '../DataContext'
import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

const DeleteAccountButton = () => {

    const {currentUser, setCurrentUser, currentPortfolio, setCurrentPortfolio, currentWatchlist, setCurrentWatchlist, playersInPorfolio, setPlayersInPortfolio, playersInWatchlist, setPlayersInWatchlist, idsInPortfolio, setIdsInPortfolio, idsInWatchlist, setIdsInWatchlist, searchResults, setSearchResults, selectedPlayer, setSelectedPlayer, showPlayer, players, setPlayers, users, setUsers, portfolios, setPortfolios, watchlists, setWatchlists, trades, setTrades} = useContext(DataContext)

    const deleteAccount = async () => {
        try {
            const res = await axios.delete('http://localhost:3001/users/66adeb3ee1440459593a48f8');
            console.log('Response:', res.data);
          } catch (error) {
            console.error('There was an error deleting the data:', error);
          }
        }      

    return (
        
        <Button id='delete-account' onClick={deleteAccount}>Delete Account</Button>

    )
}

export default DeleteAccountButton