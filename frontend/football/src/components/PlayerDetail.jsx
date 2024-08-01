import axios from 'axios'
import { useState, useEffect, useContext } from 'react'
import DataContext from '../DataContext'
import BuyButton from './BuyButton'
import SellButton from './SellButton'
import AddToWatchlistButton from './AddToWatchlistButton'
import RemoveFromWatchlistButton from './RemoveFromWatchListButton'

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
            <img src={targetPlayer.image} alt={targetPlayer.name}/>
            <div className='player-detail-info'>
              <h2>{targetPlayer.name}</h2>
              <h4>{targetPlayer.position}</h4>
              <h4>{targetPlayer.team}</h4>
              <h4>Price: ${targetPlayer.sharePrice}</h4>
            </div>
            <div className='player-detail-button-container'>
              <BuyButton player={targetPlayer} />
              <SellButton player={targetPlayer} />
              <AddToWatchlistButton player={targetPlayer} />
              <RemoveFromWatchlistButton player={targetPlayer} />
            </div>
        </div>    
    )
}

export default PlayerDetail