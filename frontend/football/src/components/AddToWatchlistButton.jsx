import axios from 'axios'
import { useState, useEffect, useContext } from 'react'
import DataContext from '../DataContext'
import Button from 'react-bootstrap/Button'

const AddToWatchlistButton = (props) => {

    const {currentUser, setCurrentUser, currentPortfolio, setCurrentPortfolio, currentWatchlist, setCurrentWatchlist, playersInPorfolio, setPlayersInPortfolio, playersInWatchlist, setPlayersInWatchlist, idsInPortfolio, setIdsInPortfolio, idsInWatchlist, setIdsInWatchlist, searchResults, setSearchResults, selectedPlayer, setSelectedPlayer, showPlayer, players, setPlayers, users, setUsers, portfolios, setPortfolios, watchlists, setWatchlists, trades, setTrades} = useContext(DataContext)

    const addToWatchlist = async () => {
      try {
          const updatedPlayers = [...currentWatchlist[0].players, props.player._id]  
          const res = await axios.put(`http://localhost:3001/watchlists/${currentWatchlist[0]._id}`, {
              ...currentWatchlist[0],
              players: updatedPlayers
          })  
          console.log('Watchlist updated:', res.data)
      } catch (error) {
          console.error('Error updating watchlist:', error)
      }
      window.location.reload() 
    }    

    return (

        <Button id='add-watchlist' onClick={addToWatchlist}>Watch</Button>
        
    )
}

export default AddToWatchlistButton