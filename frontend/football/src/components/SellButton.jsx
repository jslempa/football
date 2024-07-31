import axios from 'axios'
import { useContext } from 'react'
import DataContext from '../DataContext'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'

const SellButton = (props) => {

    console.log('Sell', props)

    const {currentUser, setCurrentUser, currentPortfolio, setCurrentPortfolio, currentWatchlist, setCurrentWatchlist, playersInPorfolio, setPlayersInPortfolio, playersInWatchlist, setPlayersInWatchlist, searchResults, setSearchResults, selectedPlayer, setSelectedPlayer, showPlayer, players} = useContext(DataContext)


    // needs an input
    const sellShares = async () => {

    }

    return (

        <Button id='sell' onClick={sellShares}>Sell</Button>
        
    )
}

export default SellButton