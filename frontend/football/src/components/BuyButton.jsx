import axios from 'axios'
import { useState, useEffect, useContext } from 'react'
import DataContext from '../DataContext'
import Button from 'react-bootstrap/Button'

const BuyButton = () => {

    const {currentUser, setCurrentUser, currentPortfolio, setCurrentPortfolio, currentWatchlist, setCurrentWatchlist, playersInPorfolio, setPlayersInPortfolio, playersInWatchlist, setPlayersInWatchlist, idsInPortfolio, setIdsInPortfolio, idsInWatchlist, setIdsInWatchlist, searchResults, setSearchResults, selectedPlayer, setSelectedPlayer, showPlayer, players, setPlayers, users, setUsers, portfolios, setPortfolios, watchlists, setWatchlists, trades, setTrades} = useContext(DataContext)

    // needs an input
    const buyShares = async () => {

    }
    
    return (
        
        <Button id='buy' onClick={buyShares}>Buy</Button>

    )
}

export default BuyButton