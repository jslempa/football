import axios from 'axios'
import Nav from './Nav'
import PlayerList from './PlayerList'
import DataContext from '../DataContext'
import { useState, useEffect, useContext } from 'react'

const PortfolioPage = (props) => {

    console.log('props', props)
 
    const {currentUser, setCurrentUser, currentPortfolio, setCurrentPortfolio, currentWatchlist, setCurrentWatchlist, playersInPorfolio, setPlayersInPortfolio, playersInWatchlist, setPlayersInWatchlist, searchResults, setSearchResults, selectedPlayer, setSelectedPlayer, showPlayer, players} = useContext(DataContext)

    return (
        <div className='portfolio'>
            <h1>{props.user[0].username}'s portfolio</h1>
            <PlayerList />
            <PlayerList />
            <Nav />
        </div>
    )
}

export default PortfolioPage