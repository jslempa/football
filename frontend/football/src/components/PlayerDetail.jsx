import axios from 'axios'
import { useState, useEffect, useContext } from 'react'
import DataContext from '../DataContext'
import BuyButton from './BuyButton'
import SellButton from './SellButton'
import AddToWatchlistButton from './AddToWatchlistButton'
import RemoveFromWatchlistButton from './RemoveFromWatchListButton'

const PlayerDetail = () => {

    const {currentUser, setCurrentUser, currentPortfolio, setCurrentPortfolio, currentWatchlist, setCurrentWatchlist, playersInPorfolio, setPlayersInPortfolio, playersInWatchlist, setPlayersInWatchlist, idsInPortfolio, setIdsInPortfolio, idsInWatchlist, setIdsInWatchlist, searchResults, setSearchResults, selectedPlayer, setSelectedPlayer, showPlayer, players} = useContext(DataContext)

    const endpoint = window.location.pathname

    //const [targetPlayer, setTargetPlayer] = useState({})

    console.log('Selected player', selectedPlayer)
    console.log('Selected player id', selectedPlayer._id)
    console.log('Watchlist player ids', idsInWatchlist)
    console.log('Portfolio player ids', idsInPortfolio)

    // useEffect(() => {
    //     getTargetPlayer()
    // }, [])
   
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

    const renderButtons = () => {

      console.log('Selected player inside renderButtons', selectedPlayer)
      console.log('ids in watchlist inside renderButtons', idsInWatchlist)
      console.log('ids in portfolio inside renderButtons', idsInPortfolio)


      if (idsInWatchlist && idsInWatchlist.includes(selectedPlayer._id)) {
        return (
          <div className='player-detail-button-container'>
            <BuyButton />
            <RemoveFromWatchlistButton />
          </div>
        )
      } else if (idsInPortfolio && idsInPortfolio.includes(selectedPlayer._id)) {
        return (
          <div className='player-detail-button-container'>
          <BuyButton />
          <SellButton />
        </div>
        )
      } else {
        return (
          <div className='player-detail-button-container'>
          <BuyButton />
          <AddToWatchlistButton />
        </div>
        )
      }
    }

    return (
        <div className='player-detail'>
            <img src={selectedPlayer.image} alt={selectedPlayer.name}/>
            <div className='player-detail-info'>
              <h2>{selectedPlayer.name}</h2>
              <h4>{selectedPlayer.position}</h4>
              <h4>{selectedPlayer.team}</h4>
              <h4>Price: ${selectedPlayer.sharePrice}</h4>
            </div>
            <div className='player-detail-button-container'>
              {renderButtons()}
            </div>
        </div>    
    )
}

export default PlayerDetail