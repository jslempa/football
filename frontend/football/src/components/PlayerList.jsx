import axios from 'axios'
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import DataContext from '../DataContext'
import BuyButton from './BuyButton'
import SellButton from './SellButton'
import AddToWatchlistButton from './AddToWatchlistButton'
import RemoveFromWatchlistButton from './RemoveFromWatchListButton'

import Button from 'react-bootstrap/Button'

const PlayerList = (props) => {

    console.log('player list props', props)

    let navigate = useNavigate()

    const { searchResults, setSearchResults } = useContext(DataContext) 

    console.log(searchResults[0])

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
                        <div className='player-card-container'>
                            <BuyButton />
                            <SellButton />
                            <AddToWatchlistButton />
                            <RemoveFromWatchlistButton />
                        </div>
                    </div>
                    ))
                ) : null
            }          
        </div>
    )
}

export default PlayerList