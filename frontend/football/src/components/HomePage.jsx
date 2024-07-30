import { useContext } from 'react'
import DataContext from '../DataContext'
import SearchBar from './SearchBar'
import CarouselThing from './CarouselThing'
import Nav from './Nav'

const HomePage = (props) => {

    //console.log('home props', props)
    //console.log('home', props.players)

    const {currentUser, setCurrentUser, currentPortfolio, setCurrentPortfolio, currentWatchlist, setCurrentWatchlist, playersInPorfolio, setPlayersInPortfolio, playersInWatchlist, setPlayersInWatchlist, searchResults, setSearchResults, selectedPlayer, setSelectedPlayer} = useContext(DataContext)


    return (
        <div className='home'>
            <SearchBar players={props.players}/>
            {/* <h1>Hello {props.user[0].username}!</h1>   */}
            {/* <CarouselThing />       */}
            {/* <CarouselThing />  */}
            {/* <CarouselThing />  */}
            <Nav />
        </div>
    )
}

export default HomePage