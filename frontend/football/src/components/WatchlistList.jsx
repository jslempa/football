import DataContext from '../DataContext'
import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const WatchlistList = () => {

    const {currentUser, setCurrentUser, currentPortfolio, setCurrentPortfolio, currentWatchlist, setCurrentWatchlist, playersInPorfolio, setPlayersInPortfolio, playersInWatchlist, setPlayersInWatchlist, idsInPorfolio, setIdsInPortfolio, idsInWatchlist, setIdsInWatchlist, searchResults, setSearchResults, selectedPlayer, setSelectedPlayer, showPlayer, players} = useContext(DataContext)

    console.log('Watchlist list', playersInWatchlist)

    // NEED TO ADD ONCLICK
    // change classNames?

    return (
        
        <div className='player-list'>
            <h2>My Watchlist</h2>
            {
                playersInWatchlist.length > 0 ? (                
                    playersInWatchlist.map((player) => (
                        <div className='player-list-card' key={player._id}>
                            <h3 className='player-data'>{player.name}</h3>
                        </div>
                    ))
                ) : <h3>Not watching any players</h3>
            } 
        </div>

    )
}

export default WatchlistList