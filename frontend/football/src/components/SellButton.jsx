import axios from 'axios'
import { useState, useEffect, useContext } from 'react'
import DataContext from '../DataContext'
import Button from 'react-bootstrap/Button'


const SellButton = () => {

    const {currentUser, setCurrentUser, currentPortfolio, setCurrentPortfolio, currentWatchlist, setCurrentWatchlist, playersInPorfolio, setPlayersInPortfolio, playersInWatchlist, setPlayersInWatchlist, idsInPortfolio, setIdsInPortfolio, idsInWatchlist, setIdsInWatchlist, searchResults, setSearchResults, selectedPlayer, setSelectedPlayer, showPlayer, players, setPlayers, users, setUsers, portfolios, setPortfolios, watchlists, setWatchlists, trades, setTrades} = useContext(DataContext)


    // needs an input
    const sellShares = async () => {

    }

    return (

        <Button id='sell' onClick={sellShares}>Sell</Button>
        
    )
}

export default SellButton