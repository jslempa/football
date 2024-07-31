import axios from 'axios'
import Nav from './Nav'
import DepositButton from './DepositButton'
import WithdrawButton from './WithdrawButton'
import SwitchUserButton from './SwitchUserButton'
import DataContext from '../DataContext'
import { useState, useEffect, useContext } from 'react'

const AccountPage = (props) => {

  console.log('Account props', props)

  const {currentUser, setCurrentUser, currentPortfolio, setCurrentPortfolio, currentWatchlist, setCurrentWatchlist, playersInPorfolio, setPlayersInPortfolio, playersInWatchlist, setPlayersInWatchlist, searchResults, setSearchResults, selectedPlayer, setSelectedPlayer, showPlayer, players} = useContext(DataContext)

  console.log('Account page current user', currentUser[0].username)

    //view trade/transaction history?

    return (
        <div className='account'>   
         
            <div className='account-content'>
              <img src={currentUser[0].image} alt='profile' />
              <h2>{currentUser[0].username}</h2>
              <h4>Current balance: ${currentUser[0].balance}</h4>
              <DepositButton />
              <WithdrawButton />
              <SwitchUserButton />
            </div>
         
          <Nav />
        </div>
      )
      
}

export default AccountPage

