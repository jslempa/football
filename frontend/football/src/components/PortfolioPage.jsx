import axios from 'axios'
import Nav from './Nav'
import PlayerList from './PlayerList'
import PortfolioList from './PortfolioList'
import WatchlistList from './WatchlistList'
import DataContext from '../DataContext'
import { useState, useEffect, useContext } from 'react'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'

const PortfolioPage = () => {
 
    const {currentUser, setCurrentUser, currentPortfolio, setCurrentPortfolio, currentWatchlist, setCurrentWatchlist, playersInPorfolio, setPlayersInPortfolio, playersInWatchlist, setPlayersInWatchlist, idsInPortfolio, setIdsInPortfolio, idsInWatchlist, setIdsInWatchlist, searchResults, setSearchResults, selectedPlayer, setSelectedPlayer, showPlayer, players} = useContext(DataContext)

    useEffect(() => {
        setSearchResults([])
    }, [])

    return (

        <div className='portfolio-page'>
            <div className='portfolio'>
                <PortfolioList />
            </div>
            <div className='watchlist'>
                <WatchlistList />
            </div>
        </div>        

    )
}

export default PortfolioPage