import axios from 'axios'
import { useState, useEffect, useContext } from 'react'
import DataContext from '../DataContext'
import Button from 'react-bootstrap/Button'

const RemoveFromWatchlistButton = (props) => {

    console.log('remove watchlist props', props)

    const {currentUser, setCurrentUser, currentPortfolio, setCurrentPortfolio, currentWatchlist, setCurrentWatchlist, playersInPorfolio, setPlayersInPortfolio, playersInWatchlist, setPlayersInWatchlist, searchResults, setSearchResults, selectedPlayer, setSelectedPlayer, showPlayer, players} = useContext(DataContext)

    console.log('current watchlist', currentWatchlist)

    const removeFromWatchlist = async () => {
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
    }

    return (

        <Button id='remove-watchlist' onClick={removeFromWatchlist}>Stop watching</Button>

    )
}

export default RemoveFromWatchlistButton