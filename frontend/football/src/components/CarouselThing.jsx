import { useContext } from 'react'
import DataContext from '../DataContext'

const CarouselThing = () => {

    const {currentUser, setCurrentUser, currentPortfolio, setCurrentPortfolio, currentWatchlist, setCurrentWatchlist, playersInPorfolio, setPlayersInPortfolio, playersInWatchlist, setPlayersInWatchlist, searchResults, setSearchResults, selectedPlayer, setSelectedPlayer} = useContext(DataContext)

    return (
        <h2>Carousel</h2>
    )
}

export default CarouselThing