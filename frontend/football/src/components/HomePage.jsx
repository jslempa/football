import { useState, useEffect, useContext } from 'react'
import DataContext from '../DataContext'
import SearchBar from './SearchBar'
import Carousel from './Carousel'

const HomePage = () => {

    const {currentUser, setCurrentUser, currentPortfolio, setCurrentPortfolio, currentWatchlist, setCurrentWatchlist, playersInPorfolio, setPlayersInPortfolio, playersInWatchlist, setPlayersInWatchlist, idsInPortfolio, setIdsInPortfolio, idsInWatchlist, setIdsInWatchlist, searchResults, setSearchResults, selectedPlayer, setSelectedPlayer, showPlayer, players, setPlayers, users, setUsers, portfolios, setPortfolios, watchlists, setWatchlists, trades, setTrades} = useContext(DataContext)

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