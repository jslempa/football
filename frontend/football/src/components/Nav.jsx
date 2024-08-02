import React from 'react'
import { useState, useEffect, useContext } from 'react'
import DataContext from '../DataContext'
import { Link } from 'react-router-dom'

const Nav = () => {

    const {currentUser, setCurrentUser, currentPortfolio, setCurrentPortfolio, currentWatchlist, setCurrentWatchlist, playersInPorfolio, setPlayersInPortfolio, playersInWatchlist, setPlayersInWatchlist, idsInPorfolio, setIdsInPortfolio, idsInWatchlist, setIdsInWatchlist, searchResults, setSearchResults, selectedPlayer, setSelectedPlayer, showPlayer, players} = useContext(DataContext)

    return (
        <nav className='nav'>
            <Link to='/portfolio'>Portfolio</Link>
            <Link to='/'>Home</Link>
            <Link to='/account'>Account</Link>
        </nav>
    )
}

export default Nav