import axios from 'axios'
import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import DataContext from '../DataContext'
import BuyButton from './BuyButton'
import SellButton from './SellButton'
import AddToWatchlistButton from './AddToWatchlistButton'
import RemoveFromWatchlistButton from './RemoveFromWatchListButton'
import Button from 'react-bootstrap/Button'

const PlayerList = () => {

    let navigate = useNavigate()

    const {currentUser, setCurrentUser, currentPortfolio, setCurrentPortfolio, currentWatchlist, setCurrentWatchlist, playersInPorfolio, setPlayersInPortfolio, playersInWatchlist, setPlayersInWatchlist, searchResults, setSearchResults, selectedPlayer, setSelectedPlayer, showPlayer, players} = useContext(DataContext) 

    const renderPlayers = () => {
        if (playersInWatchlist.includes(targetPlayer._id)) {
          return (
            <div className='player-detail-button-container'>
              <BuyButton player={targetPlayer} />
              <RemoveFromWatchlistButton player={targetPlayer} />
            </div>
          )
        } else if (playersInPorfolio.includes(targetPlayer._id)) {
          return (
            <div className='player-detail-button-container'>
            <BuyButton player={targetPlayer} />
            <SellButton player={targetPlayer} />
          </div>
          )
        } else {
          return (
            <div className='player-detail-button-container'>
            <BuyButton player={targetPlayer} />
            <AddToWatchlistButton player={targetPlayer} />
          </div>
          )
        }
      }
    

    return (
        <div className='player-list'>
            {
                searchResults.length > 0 ? (
                    searchResults.map((result, index) => (
                    <div className='player-card' key={index} onClick={()=>navigate(`/players/${result.espnID}`)}>
                        <div className='player-card-img'>
                            <img src={result.image} alt={result.name}/>  
                        </div>
                        <div className='player-card-data'>
                            <h3>{result.name}</h3>
                            <h5>{result.position}</h5>
                            <h5>{result.team}</h5>
                            <h5>${result.sharePrice}</h5>
                        </div>
                        {/* <div className='player-card-button-container'>
                            <BuyButton />
                            <SellButton />
                            <AddToWatchlistButton />
                            <RemoveFromWatchlistButton />
                        </div> */}
                    </div>
                    ))
                ) : null
            }        
        </div>
    )
}

export default PlayerList