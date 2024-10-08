import axios from 'axios'
import { useState, useEffect, useContext } from 'react'
import DataContext from '../DataContext'
import BuyButton from './BuyButton'
import SellButton from './SellButton'
import AddToWatchlistButton from './AddToWatchlistButton'
import RemoveFromWatchlistButton from './RemoveFromWatchListButton'

const PlayerDetail = () => {

  const {currentUser, setCurrentUser, currentPortfolio, setCurrentPortfolio, currentWatchlist, setCurrentWatchlist, playersInPorfolio, setPlayersInPortfolio, playersInWatchlist, setPlayersInWatchlist, idsInPortfolio, setIdsInPortfolio, idsInWatchlist, setIdsInWatchlist, searchResults, setSearchResults, selectedPlayer, setSelectedPlayer, showPlayer, players, setPlayers, users, setUsers, portfolios, setPortfolios, watchlists, setWatchlists, trades, setTrades} = useContext(DataContext)

    const endpoint = window.location.pathname

    const [targetPlayer, setTargetPlayer] = useState({})

    // console.log('Selected player id', selectedPlayer._id)
    // console.log('Target player id', targetPlayer._id)
    // console.log('Watchlist player ids', idsInWatchlist)
    // console.log('Portfolio player ids', idsInPortfolio)

    useEffect(() => {
        getTargetPlayer()
        if (window.location.pathname === '/') {
          document.body.style.backgroundImage = 'url(https://static.clubs.nfl.com/image/private/t_new_photo_album/jets/qhsgjtl4udb0brklchxg.jpg)'
          document.body.style.backgroundSize = 'cover'
          document.body.style.backgroundPosition = '60% center'
      } else {
          document.body.style.backgroundImage = ''
          document.body.style.backgroundColor = '#04A246'
      }
    }, [])
   
    const getTargetPlayer = async () => {
      try {
        const res = await axios.get(`http://localhost:3001${endpoint}`) 
        let playerData = res.data
        setTargetPlayer(playerData)
      } catch (error) {
        console.error('Error getting player:', error)
      } 
    }

    const renderButtons = () => {

      // console.log('Target player inside renderButtons', targetPlayer)
      // console.log('ids in watchlist inside renderButtons', idsInWatchlist)
      // console.log('ids in portfolio inside renderButtons', idsInPortfolio)


      if (idsInWatchlist && idsInWatchlist.includes(targetPlayer._id)) {
        return (
          <div className='player-detail-button-container'>
            <BuyButton player={targetPlayer} />
            <RemoveFromWatchlistButton player={targetPlayer} />
          </div>
        )
      } else if (idsInPortfolio && idsInPortfolio.includes(targetPlayer._id)) {
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

        <div className='player-detail'>
            <div className='player-detail-img'>
                <img src={targetPlayer.image} alt={targetPlayer.name}/>
            </div>  
            <div className='player-detail-info'>
                <h2>{targetPlayer.name}</h2>
                <h4>{targetPlayer.position}</h4>
                <h4>{targetPlayer.team}</h4>
                <h4>Price: ${targetPlayer.sharePrice}</h4>
            </div>
            <div className='player-detail-button-container'>
              {renderButtons()}
            </div>
        </div>    

    )
}

export default PlayerDetail