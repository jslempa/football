import DataContext from '../DataContext'
import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const PortfolioList = () => {

    const {currentUser, setCurrentUser, currentPortfolio, setCurrentPortfolio, currentWatchlist, setCurrentWatchlist, playersInPorfolio, setPlayersInPortfolio, playersInWatchlist, setPlayersInWatchlist, idsInPortfolio, setIdsInPortfolio, idsInWatchlist, setIdsInWatchlist, searchResults, setSearchResults, selectedPlayer, setSelectedPlayer, showPlayer, players, setPlayers, users, setUsers, portfolios, setPortfolios, watchlists, setWatchlists, trades, setTrades} = useContext(DataContext)

    //console.log('Portfolio list', playersInPorfolio)

    useEffect(() => {
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

        <div className='player-list'>
            <h2>My Portfolio</h2>           
            {
                playersInPorfolio.length > 0 ? (                
                    playersInPorfolio.map((player) => (
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
                ) : <h3>No players in portfolio</h3>
            }       
        </div>

    )
}

export default PortfolioList