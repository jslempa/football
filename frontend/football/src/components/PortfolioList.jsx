import DataContext from '../DataContext'
import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const PortfolioList = () => {

    const {currentUser, setCurrentUser, currentPortfolio, setCurrentPortfolio, currentWatchlist, setCurrentWatchlist, playersInPorfolio, setPlayersInPortfolio, playersInWatchlist, setPlayersInWatchlist, idsInPorfolio, setIdsInPortfolio, idsInWatchlist, setIdsInWatchlist, searchResults, setSearchResults, selectedPlayer, setSelectedPlayer, showPlayer, players} = useContext(DataContext)

    console.log('Portfolio list', playersInPorfolio)

    // change classNames?
    
    return (

        <div className='player-list'>
            <h2>My Portfolio</h2>           
            {
                playersInPorfolio.length > 0 ? (                
                    playersInPorfolio.map((player) => (
                        <div className='player-list-card' key={player._id} onClick={()=>navigate(`/players/${player.espnID}`)}>
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
                ) : <h3>No players in portfolio</h3>
            }       
        </div>

    )
}

export default PortfolioList