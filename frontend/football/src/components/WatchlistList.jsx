import DataContext from '../DataContext'
import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const WatchlistList = () => {

    const {currentUser, setCurrentUser, currentPortfolio, setCurrentPortfolio, currentWatchlist, setCurrentWatchlist, playersInPorfolio, setPlayersInPortfolio, playersInWatchlist, setPlayersInWatchlist, idsInPortfolio, setIdsInPortfolio, idsInWatchlist, setIdsInWatchlist, searchResults, setSearchResults, selectedPlayer, setSelectedPlayer, showPlayer, players} = useContext(DataContext)

    console.log('Watchlist list', playersInWatchlist)

    return (
        
        <div className='player-list'>
            <h2>My Watchlist</h2>
            {
                playersInWatchlist.length > 0 ? (                
                    playersInWatchlist.map((player) => (
                        <div className='player-list-card' key={player._id} onClick={()=>showPlayer(player, player.espnID)}>
                            <div className='player-list-img'>
                                <img src={player.image} alt={player.name}/>  
                            </div>
                            <div className='player-list-data'>
                                <h3>{player.name}</h3>
                                <h5>{player.position}</h5>
                                <h5>{player.team}</h5>
                                <h5>${player.sharePrice}</h5>
                            </div>  
                        </div>
                    ))
                ) : <h3>Not watching any players</h3>
            } 
        </div>

    )
}

export default WatchlistList