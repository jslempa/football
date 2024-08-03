import { useState, useEffect, useContext } from 'react'
import DataContext from '../DataContext'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

const SwitchUserButton = () => {

    const {currentUser, setCurrentUser, currentPortfolio, setCurrentPortfolio, currentWatchlist, setCurrentWatchlist, playersInPorfolio, setPlayersInPortfolio, playersInWatchlist, setPlayersInWatchlist, idsInPortfolio, setIdsInPortfolio, idsInWatchlist, setIdsInWatchlist, searchResults, setSearchResults, selectedPlayer, setSelectedPlayer, showPlayer, players, users} = useContext(DataContext)

    console.log(users)
    console.log()
    
    const switchUserJSlempa = () => {
        setCurrentUser(users[0])
        console.log('user switched')
    }

    const switchUserJHalpert = () => {

    }

    const switchUserDSchrute = () => {

    }
    
    return (
       
        <DropdownButton id="dropdown-basic-button" title="Switch User">
        <Dropdown.Item href="#/action-1" onClick={()=>}>Jslempa</Dropdown.Item>
        <Dropdown.Item href="#/action-2" onClick={()=>setCurrentUser(users[1])}>Jhalpert</Dropdown.Item>
        <Dropdown.Item href="#/action-3" onClick={()=>setCurrentUser(users[2])}>Dschrute</Dropdown.Item>
        </DropdownButton>
      
     

    )
}

export default SwitchUserButton