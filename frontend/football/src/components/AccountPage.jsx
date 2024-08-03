import axios from 'axios'
import DepositButton from './DepositButton'
import WithdrawButton from './WithdrawButton'
import CreateAccountButton from './CreateAccountButton'
import DeleteAccountButton from './DeleteAccountButton'
import SwitchUserButton from './SwitchUserButton'
import DataContext from '../DataContext'
import { useState, useEffect, useContext } from 'react'

const AccountPage = () => {

  const {currentUser, setCurrentUser, currentPortfolio, setCurrentPortfolio, currentWatchlist, setCurrentWatchlist, playersInPorfolio, setPlayersInPortfolio, playersInWatchlist, setPlayersInWatchlist, idsInPortfolio, setIdsInPortfolio, idsInWatchlist, setIdsInWatchlist, searchResults, setSearchResults, selectedPlayer, setSelectedPlayer, showPlayer, players, setPlayers, users, setUsers, portfolios, setPortfolios, watchlists, setWatchlists, trades, setTrades, testAccountID, setTestAccountID} = useContext(DataContext)
  
  useEffect(() => {
    if (window.location.pathname === '/') {
        document.body.style.backgroundImage = 'url(https://static.clubs.nfl.com/image/private/t_new_photo_album/jets/qhsgjtl4udb0brklchxg.jpg)'
        document.body.style.backgroundSize = 'cover'
        document.body.style.backgroundPosition = '60% center'
    } else {
        document.body.style.backgroundImage = ''
        document.body.style.backgroundColor = '#04A246'
    }
  }, [])

    //view trade/transaction history?

    return (

        <div className='account'>            
            <div className='account-content'>
                <img src={currentUser.image} alt='profile' />
                <div className='account-data'>
                    <h2>{currentUser.username}</h2>
                    <h4>Current balance: ${currentUser.balance}</h4>
                </div>
                <div>
                    <DepositButton />
                    <WithdrawButton />
                    <hr/>
                    <CreateAccountButton />
                    <DeleteAccountButton />
                    <SwitchUserButton />
                </div>
            </div>      
        </div>
        
      )      
}

export default AccountPage

