import axios from 'axios'
import Nav from './Nav'
import PlayerList from './PlayerList'
import DataContext from '../DataContext'
import { useState, useEffect, useContext } from 'react'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'

const PortfolioPage = () => {
 
    const {currentUser, setCurrentUser, currentPortfolio, setCurrentPortfolio, currentWatchlist, setCurrentWatchlist, playersInPorfolio, setPlayersInPortfolio, playersInWatchlist, setPlayersInWatchlist, searchResults, setSearchResults, selectedPlayer, setSelectedPlayer, showPlayer, players} = useContext(DataContext)

    useEffect(() => {
        setSearchResults([])
    }, [])

    return (

        <div className='portfolio'>

        <Tabs
            defaultActiveKey="portfolio-page"
            id="justify-tab"
            className="mb-3"
            justify>
            <Tab eventKey="portfolio" title="Portfolio">
                <PlayerList players={playersInPorfolio}/>    
            </Tab>
            <Tab eventKey="watchlist" title="Watchlist">
                <PlayerList players={playersInWatchlist}/>
            </Tab>
        </Tabs>
            
        </div>

    )
}

export default PortfolioPage