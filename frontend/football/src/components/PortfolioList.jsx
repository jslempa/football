import DataContext from '../DataContext'
import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const PortfolioList = () => {

    const {currentUser, setCurrentUser, currentPortfolio, setCurrentPortfolio, currentWatchlist, setCurrentWatchlist, playersInPorfolio, setPlayersInPortfolio, playersInWatchlist, setPlayersInWatchlist, idsInPorfolio, setIdsInPortfolio, idsInWatchlist, setIdsInWatchlist, searchResults, setSearchResults, selectedPlayer, setSelectedPlayer, showPlayer, players} = useContext(DataContext)

    console.log('Portfolio list', playersInPorfolio)

    // NEED TO ADD ONCLICK
    // change classNames?
    
    return (

        <div className='player-list'>
            <h2>My Portfolio</h2>           
            {
                playersInPorfolio.length > 0 ? (                
                    playersInPorfolio.map((player) => (
                        <div className='player-list-card' key={player._id}>
                            <h3 className='player-data'>{player.name}</h3>
                        </div>
                    ))
                ) : <h3>No players in portfolio</h3>
            }       
        </div>
        
    )
}

export default PortfolioList