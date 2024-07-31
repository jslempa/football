import axios from 'axios'
import { useContext } from 'react'
import DataContext from '../DataContext'
import Button from 'react-bootstrap/Button'

const RemoveFromWatchlistButton = (props) => {

    console.log('Remove list props', props)

    const {currentUser, setCurrentUser, currentPortfolio, setCurrentPortfolio, currentWatchlist, setCurrentWatchlist, playersInPorfolio, setPlayersInPortfolio, playersInWatchlist, setPlayersInWatchlist, searchResults, setSearchResults, selectedPlayer, setSelectedPlayer, showPlayer, players} = useContext(DataContext)

    // needs an input
    const removeFromWatchlist = async () => {

    }

    return (

        <Button id='remove-watchlist' onClick={removeFromWatchlist}>Stop watching</Button>

    )
}

export default RemoveFromWatchlistButton