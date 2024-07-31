import React, { useState } from 'react'
import { useNavigate, useNavigation } from 'react-router-dom'
import { useContext } from 'react'
import DataContext from '../DataContext'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'

const SearchBar = () => {

    // console.log('search', props)
    // console.log('url test', window.location.pathname)

    let navigate = useNavigate()

    const {currentUser, setCurrentUser, currentPortfolio, setCurrentPortfolio, currentWatchlist, setCurrentWatchlist, playersInPorfolio, setPlayersInPortfolio, playersInWatchlist, setPlayersInWatchlist, searchResults, setSearchResults, selectedPlayer, setSelectedPlayer, showPlayer, players} = useContext(DataContext)

    const [searchQuery, setSearchQuery] = useState('')
    //const [searchResults, setSearchResults] = useState([])

    const handleChange = (e) => {
        setSearchQuery(e.target.value)
        console.log(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('submitted', searchQuery) //works
        let allPlayers = props.players
        let matchingPlayers = allPlayers.filter(player => player.name.toLowerCase().includes(searchQuery.toLowerCase()))
        console.log('results', matchingPlayers) //works  
        setSearchResults(matchingPlayers)
        navigate('/players')
    }

    return (

        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Search players"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            value={searchQuery}
            onChange={handleChange} />
          <Button variant="outline-secondary" id="button-addon2" onClick={handleSubmit}>Submit</Button>
        </InputGroup>

    )
}

export default SearchBar