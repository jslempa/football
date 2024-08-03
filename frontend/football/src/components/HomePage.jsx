import { useState, useEffect, useContext } from 'react'
import DataContext from '../DataContext'
import SearchBar from './SearchBar'
import Carousel from './Carousel'

const HomePage = () => {

    const {currentUser, setCurrentUser, currentPortfolio, setCurrentPortfolio, currentWatchlist, setCurrentWatchlist, playersInPorfolio, setPlayersInPortfolio, playersInWatchlist, setPlayersInWatchlist, idsInPortfolio, setIdsInPortfolio, idsInWatchlist, setIdsInWatchlist, searchResults, setSearchResults, selectedPlayer, setSelectedPlayer} = useContext(DataContext)

    console.log(window.location.pathname)

    useEffect(() => {
        if (window.location.pathname === '/') {
            console.log('home')
            document.body.style.backgroundImage = 'url(https://static.clubs.nfl.com/image/private/t_new_photo_album/jets/qhsgjtl4udb0brklchxg.jpg)'
            document.body.style.backgroundSize = 'cover'
            document.body.style.backgroundPosition = '60% center'
        } else {
            console.log('not home')
            document.body.style.backgroundImage = ''
            document.body.style.backgroundColor = '#04A246'
        }
    }, [])

    return (
        <div className='home'>
            <SearchBar />
            {/* <h1>Hello {props.user[0].username}!</h1>   */}
            {/* <Carousel />       */}
            {/* <Carousel />  */}
            {/* <Carousel />  */}
            {/* <Nav /> */}
        </div>
    )
}

export default HomePage