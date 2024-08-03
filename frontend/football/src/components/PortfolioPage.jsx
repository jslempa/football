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
 
    const {currentUser, setCurrentUser, currentPortfolio, setCurrentPortfolio, currentWatchlist, setCurrentWatchlist, playersInPorfolio, setPlayersInPortfolio, playersInWatchlist, setPlayersInWatchlist, idsInPortfolio, setIdsInPortfolio, idsInWatchlist, setIdsInWatchlist, searchResults, setSearchResults, selectedPlayer, setSelectedPlayer, showPlayer, players, setPlayers, users, setUsers, portfolios, setPortfolios, watchlists, setWatchlists, trades, setTrades} = useContext(DataContext)

    useEffect(() => {
        setSearchResults([])
        if (window.location.pathname === '/') {
            document.body.style.backgroundImage = 'url(https://static.clubs.nfl.com/image/private/t_new_photo_album/jets/qhsgjtl4udb0brklchxg.jpg)'
            document.body.style.backgroundSize = 'cover'
            document.body.style.backgroundPosition = '60% center'
        } else {
            document.body.style.backgroundImage = ''
            document.body.style.backgroundColor = '#04A246'
        }
    }, [])

    return (

        <div className='portfolio-page'>
            <PortfolioList />
            <WatchlistList />            
        </div>        

    )
}

export default PortfolioPage