import axios from 'axios'
import DepositButton from './DepositButton'
import WithdrawButton from './WithdrawButton'
import SwitchUserButton from './SwitchUserButton'
import DataContext from '../DataContext'
import { useState, useEffect, useContext } from 'react'

const AccountPage = () => {

  const {currentUser, setCurrentUser, currentPortfolio, setCurrentPortfolio, currentWatchlist, setCurrentWatchlist, playersInPorfolio, setPlayersInPortfolio, playersInWatchlist, setPlayersInWatchlist, searchResults, setSearchResults, selectedPlayer, setSelectedPlayer, showPlayer, players} = useContext(DataContext)

    //view trade/transaction history?

    return (
        <div className='account'>   
         
            <div className='account-content'>
              <img src={currentUser.image} alt='profile' />
              <h2>{currentUser.username}</h2>
              <h4>Current balance: ${currentUser.balance}</h4>
              <DepositButton />
              <WithdrawButton />
              <SwitchUserButton />
            </div>
      
        </div>
      )
      
}

export default AccountPage

