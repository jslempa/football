import axios from 'axios'
import Nav from './Nav'
import PlayerList from './PlayerList'
import DataContext from '../DataContext'
import { useState, useEffect, useContext } from 'react'

const PortfolioPage = () => {

    //console.log('portfolio props', props)
 
    const {currentUser, setCurrentUser, currentPortfolio, setCurrentPortfolio, currentWatchlist, setCurrentWatchlist, playersInPorfolio, setPlayersInPortfolio, playersInWatchlist, setPlayersInWatchlist, searchResults, setSearchResults, selectedPlayer, setSelectedPlayer, showPlayer, players} = useContext(DataContext)

    return (
        <div className='portfolio'>
            <h1>{currentUser.username}'s portfolio</h1>
            <PlayerList />
            <PlayerList />
        </div>
    )
}

export default PortfolioPage