import axios from 'axios'
import Button from 'react-bootstrap/Button'
import DataContext from '../DataContext'
import { useState, useEffect, useContext } from 'react'

const WithdrawButton = () => {
    
    const {currentUser, setCurrentUser, currentPortfolio, setCurrentPortfolio, currentWatchlist, setCurrentWatchlist, playersInPorfolio, setPlayersInPortfolio, playersInWatchlist, setPlayersInWatchlist, idsInPortfolio, setIdsInPortfolio, idsInWatchlist, setIdsInWatchlist, searchResults, setSearchResults, selectedPlayer, setSelectedPlayer, showPlayer, players} = useContext(DataContext)

    // needs an input
    const withdrawFunds = async () => {
        try {
          let userID = props.user._id
          console.log('Withdraw userID', userID)
          const res = await axios.put(`http://localhost:3001/users/${userID}`, {
            balance: 100
          })
          console.log('Balance updated:', res.data)
        } catch (error) {
          console.error('Error updating balance:', error)
        }
      }

    return (

        <Button id='withdraw' onClick={withdrawFunds}>Withdraw</Button>

    )
}

export default WithdrawButton