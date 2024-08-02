import { useState, useEffect, useContext } from 'react'
import DataContext from '../DataContext'

const TestContext = () => {

    const {currentUser, setCurrentUser, currentPortfolio, setCurrentPortfolio, currentWatchlist, setCurrentWatchlist, playersInPorfolio, setPlayersInPortfolio, playersInWatchlist, setPlayersInWatchlist, idsInPorfolio, setIdsInPortfolio, idsInWatchlist, setIdsInWatchlist, searchResults, setSearchResults, selectedPlayer, setSelectedPlayer, showPlayer, players} = useContext(DataContext)
    
    return (
        <div className='context-test'>
            <h2>Testing context</h2>
            <h2>{currentUser.username}</h2>
        </div>
    )
}

export default TestContext
