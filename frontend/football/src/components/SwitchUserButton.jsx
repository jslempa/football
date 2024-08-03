import { useState, useEffect, useContext } from 'react'
import DataContext from '../DataContext'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

const SwitchUserButton = () => {

    const {currentUser, setCurrentUser, currentPortfolio, setCurrentPortfolio, currentWatchlist, setCurrentWatchlist, playersInPorfolio, setPlayersInPortfolio, playersInWatchlist, setPlayersInWatchlist, idsInPortfolio, setIdsInPortfolio, idsInWatchlist, setIdsInWatchlist, searchResults, setSearchResults, selectedPlayer, setSelectedPlayer, showPlayer, players, setPlayers, users, setUsers, portfolios, setPortfolios, watchlists, setWatchlists, trades, setTrades} = useContext(DataContext)

    // console.log(users)
    // console.log(portfolios)
    // console.log(watchlists)
    
    const switchUserJSlempa = () => {
        setCurrentUser(users[0])
        setCurrentPortfolio(portfolios[0])
        setCurrentWatchlist(watchlists[0])
        console.log('user switched')
    }

    const switchUserJHalpert = () => {
        setCurrentUser(users[1])
        setCurrentPortfolio(portfolios[1])
        setCurrentWatchlist(watchlists[1])
    }

    const switchUserDSchrute = () => {
        setCurrentUser(users[2])
        setCurrentPortfolio(portfolios[2])
        setCurrentWatchlist(watchlists[2])
    }

    const switchUserCBratton = () => {
        setCurrentUser(users[6])
    }
    
    return (
       
        <DropdownButton id="dropdown-basic-button" title="Switch User">
            <Dropdown.Item href="#/action-1" onClick={switchUserJSlempa}>Jslempa</Dropdown.Item>
            <Dropdown.Item href="#/action-2" onClick={switchUserJHalpert}>Jhalpert</Dropdown.Item>
            <Dropdown.Item href="#/action-3" onClick={switchUserDSchrute}>Dschrute</Dropdown.Item>
            {users.length > 5 ? <Dropdown.Item href="#/action-3" onClick={switchUserCBratton}>Cbratton</Dropdown.Item> : null}
        </DropdownButton>     

    )
}

export default SwitchUserButton