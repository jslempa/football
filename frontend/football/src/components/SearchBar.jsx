import { useNavigate } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react'
import DataContext from '../DataContext'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'

const SearchBar = () => {

    let navigate = useNavigate()

    const {currentUser, setCurrentUser, currentPortfolio, setCurrentPortfolio, currentWatchlist, setCurrentWatchlist, playersInPorfolio, setPlayersInPortfolio, playersInWatchlist, setPlayersInWatchlist, idsInPortfolio, setIdsInPortfolio, idsInWatchlist, setIdsInWatchlist, searchResults, setSearchResults, selectedPlayer, setSelectedPlayer, showPlayer, players, setPlayers, users, setUsers, portfolios, setPortfolios, watchlists, setWatchlists, trades, setTrades} = useContext(DataContext)

    const [searchQuery, setSearchQuery] = useState('')

    const handleChange = (e) => {
        setSearchQuery(e.target.value)
        console.log(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('submitted', searchQuery)
        let matchingPlayers = players.filter(player => player.name.toLowerCase().includes(searchQuery.toLowerCase()))
        console.log('results', matchingPlayers) 
        setSearchResults(matchingPlayers)
        navigate('/players')
    }

    return (

        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Search players"
            aria-label="Search"
            aria-describedby="basic-addon2"
            value={searchQuery}
            onChange={handleChange} />
          <Button variant="outline-secondary" id="button-addon2" onClick={handleSubmit}>Submit</Button>
        </InputGroup>

    )
}

export default SearchBar