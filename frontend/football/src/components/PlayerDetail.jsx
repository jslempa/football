import axios from 'axios'
import { useState, useEffect, useContext } from 'react'
import DataContext from '../DataContext'
import TestContext from './TestContext'

const PlayerDetail = () => {

    const {currentUser, setCurrentUser, currentPortfolio, setCurrentPortfolio, currentWatchlist, setCurrentWatchlist, playersInPorfolio, setPlayersInPortfolio, playersInWatchlist, setPlayersInWatchlist, searchResults, setSearchResults, selectedPlayer, setSelectedPlayer, showPlayer, players} = useContext(DataContext)

    const endpoint = window.location.pathname

    const [targetPlayer, setTargetPlayer] = useState({})

    useEffect(() => {
        getTargetPlayer()
    }, [])
   
    const getTargetPlayer = async () => {
      try {
        const res = await axios.get(`http://localhost:3001${endpoint}`) 
        let playerData = res.data
        console.log('playerData', playerData)
        setTargetPlayer(playerData)
      } catch (error) {
        console.error('Error getting player:', error)
      } 
    }

    return (
        <div className='player-detail'>
            <h1>{targetPlayer.name}</h1>
            {/* <TestContext /> */}
        </div>    
    )
}

export default PlayerDetail