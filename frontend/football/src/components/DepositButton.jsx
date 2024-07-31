import axios from 'axios'
import DataContext from '../DataContext'
import { useState, useEffect, useContext } from 'react'
import Button from 'react-bootstrap/Button'

const DepositButton = (props) => {

    console.log('Deposit props', props)

    const {currentUser, setCurrentUser, currentPortfolio, setCurrentPortfolio, currentWatchlist, setCurrentWatchlist, playersInPorfolio, setPlayersInPortfolio, playersInWatchlist, setPlayersInWatchlist, searchResults, setSearchResults, selectedPlayer, setSelectedPlayer, showPlayer, players} = useContext(DataContext)

    // needs an input
    const depositFunds = async () => {
        try {
          let userID = props.user._id
          console.log('Deposit userID', userID)
          const res = await axios.put(`http://localhost:3001/users/${userID}`, {
            balance: 100
          })
          console.log('Balance updated:', res.data)
        } catch (error) {
          console.error('Error updating balance:', error)
        }
      }
    
    return (

        <Button id='deposit' onClick={depositFunds}>Deposit</Button>

    )
}

export default DepositButton