import { useContext } from 'react'
import DataContext from '../DataContext'
import Button from 'react-bootstrap/Button'

const SwitchUserButton = () => {

    const {currentUser, setCurrentUser, currentPortfolio, setCurrentPortfolio, currentWatchlist, setCurrentWatchlist, playersInPorfolio, setPlayersInPortfolio, playersInWatchlist, setPlayersInWatchlist, searchResults, setSearchResults, selectedPlayer, setSelectedPlayer} = useContext(DataContext)
    
    return (
       
        <Button id='switch-user' onClick={switchUser}>Switch user</Button>

    )
}

export default SwitchUserButton