import React, { useState } from 'react'
import { useContext } from 'react'
import { useNavigate, useNavigation } from 'react-router-dom'
import DataContext from '../DataContext'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'

const SearchBar = (props) => {

    console.log('search', props)

    let navigate = useNavigate()

    const { searchResults, setSearchResults} = useContext(DataContext)

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
          onChange={handleChange}
                  />
        <Button variant="outline-secondary" id="button-addon2" onClick={handleSubmit}>
          Submit
        </Button>
      </InputGroup>




    //     <div className='searchBar'>
    //     <form onSubmit={handleSubmit}>
    //          <input type='text' onChange={props.handleChange} value={props.searchQuery} />
    //         <button type='submit'>Search</button>
    //      </form>
    //   </div>
    )
}

export default SearchBar