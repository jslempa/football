import axios from 'axios'
import { useContext } from 'react'
import DataContext from '../DataContext'
import Button from 'react-bootstrap/Button'

const AddToWatchlistButton = (props) => {

    console.log('Add list props', props)

    const {currentUser, setCurrentUser, currentPortfolio, setCurrentPortfolio, currentWatchlist, setCurrentWatchlist, playersInPorfolio, setPlayersInPortfolio, playersInWatchlist, setPlayersInWatchlist, searchResults, setSearchResults, selectedPlayer, setSelectedPlayer} = useContext(DataContext)

    // needs an input
    const addToWatchlist = async () => {

    }

    return (

        <Button id='add-watchlist' onClick={addToWatchlist}>Watch</Button>

    )
}

export default AddToWatchlistButton