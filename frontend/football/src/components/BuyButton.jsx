import axios from 'axios'
import { useContext } from 'react'
import DataContext from '../DataContext'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'

const BuyButton = (props) => {

    console.log('Buy', props)

    const {currentUser, setCurrentUser, currentPortfolio, setCurrentPortfolio, currentWatchlist, setCurrentWatchlist, playersInPorfolio, setPlayersInPortfolio, playersInWatchlist, setPlayersInWatchlist, searchResults, setSearchResults, selectedPlayer, setSelectedPlayer} = useContext(DataContext)

    // needs an input
    const buyShares = async () => {

    }
    
    return (
        
        <Button id='buy' onClick={buyShares}>Buy</Button>

    )
}

export default BuyButton