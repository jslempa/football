import axios from 'axios'
import { useState } from 'react'
import { useContext } from 'react'
import DataContext from '../DataContext'
import TestContext from './TestContext'

const PlayerDetail = (props) => {

    console.log('player detail props', props)

    const {currentUser, setCurrentUser, currentPortfolio, setCurrentPortfolio, currentWatchlist, setCurrentWatchlist, playersInPorfolio, setPlayersInPortfolio, playersInWatchlist, setPlayersInWatchlist, searchResults, setSearchResults, selectedPlayer, setSelectedPlayer} = useContext(DataContext)


    return (
        <div className='player-detail'>
            <h1>Player detail</h1>
            <TestContext />
        </div>    
    )
}

export default PlayerDetail