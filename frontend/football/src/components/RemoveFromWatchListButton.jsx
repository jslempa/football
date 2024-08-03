import axios from 'axios'
import { useState, useEffect, useContext } from 'react'
import DataContext from '../DataContext'
import Button from 'react-bootstrap/Button'

const RemoveFromWatchlistButton = (props) => {

    console.log('remove watchlist props', props)

    const {currentUser, setCurrentUser, currentPortfolio, setCurrentPortfolio, currentWatchlist, setCurrentWatchlist, playersInPorfolio, setPlayersInPortfolio, playersInWatchlist, setPlayersInWatchlist, idsInPortfolio, setIdsInPortfolio, idsInWatchlist, setIdsInWatchlist, searchResults, setSearchResults, selectedPlayer, setSelectedPlayer, showPlayer, players, setPlayers, users, setUsers, portfolios, setPortfolios, watchlists, setWatchlists, trades, setTrades} = useContext(DataContext)

    const removeFromWatchlist = async () => {
        try {
            const updatedPlayers = currentWatchlist[0].players.filter(current => current !== props.player._id)
            const updatedWatchlist = {
                ...currentWatchlist[0],
                players: updatedPlayers
            }  
            const res = await axios.put(`http://localhost:3001/watchlists/${currentWatchlist[0]._id}`, updatedWatchlist)    
            console.log('Watchlist updated:', res.data)
        } catch (error) {            
            console.error('Error updating watchlist:', error)
        }
        window.location.reload()
    }

    return (

        <Button id='remove-watchlist' onClick={removeFromWatchlist}>Unwatch</Button>

    )
}

export default RemoveFromWatchlistButton