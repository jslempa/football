import axios from 'axios'
import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import DataContext from '../DataContext'
import BuyButton from './BuyButton'
import SellButton from './SellButton'
import AddToWatchlistButton from './AddToWatchlistButton'
import RemoveFromWatchlistButton from './RemoveFromWatchListButton'
import Button from 'react-bootstrap/Button'

const PlayerList = (props) => {

    let navigate = useNavigate()

    const {currentUser, setCurrentUser, currentPortfolio, setCurrentPortfolio, currentWatchlist, setCurrentWatchlist, playersInPorfolio, setPlayersInPortfolio, playersInWatchlist, setPlayersInWatchlist, searchResults, setSearchResults, selectedPlayer, setSelectedPlayer, showPlayer, players} = useContext(DataContext) 

    console.log('playerlist props', props)
    console.log('search results', searchResults)

    const renderPlayers = () => {

        if (searchResults.length > 0) {

          return (
            <div className='player-list'>
            {
              searchResults.map((result, index) => (

                <div className='player-card' key={index} onClick={()    =>navigate(`/players/${result.espnID}`)}>
                    <div className='player-card-img'>
                        <img src={result.image} alt={result.name}/>  
                    </div>
                    <div className='player-card-data'>
                        <h3>{result.name}</h3>
                        <h5>{result.position}</h5>
                        <h5>{result.team}</h5>
                        <h5>${result.sharePrice}</h5>
                    </div>     
                </div>
              ))             
            }        
            </div>
          )

        } else {
        
            if (props.portfolio && playersInPorfolio.length > 0) {
                return (
                    <div className='player-list'>
                    {
                      searchResults.map((result, index) => (
        
                        <div className='player-card' key={index} onClick={()    =>navigate(`/players/${result.espnID}`)}>
        
                          <div className='player-card-img'>
                            <img src={result.image} alt={result.name}/>  
                          </div>
                                
                          <div className='player-card-data'>
                            <h3>{result.name}</h3>
                            <h5>{result.position}</h5>
                            <h5>{result.team}</h5>
                            <h5>${result.sharePrice}</h5>
                          </div>     
        
                        </div>
                      ))             
                    }        
                    </div>
                  )
        } 
        
        else {
          return (
            <div className='player-detail-button-container'>
       
          </div>
          )
        }
    }
      }
    

    return (
        <div className='player-list'>
            {
             
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
                  
                    </div>
                    ))
     
            }        
        </div>
    )
}

export default PlayerList