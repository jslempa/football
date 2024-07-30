import React, { useState } from 'react'
import { useNavigate, useNavigation } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'

const SearchBar = (props) => {

    console.log('search', props)

    let navigate = useNavigate()

    const [searchQuery, setSearchQuery] = useState('')

    const handleChange = (e) => {
        setSearchQuery(e.target.value)
        console.log(e.target.value)
    }

    const handleSubmit = (e) => {
        console.log('submitted')
        // e.preventDefault()
        // //get player by search query
        // getResults(searchQuery) //change to e.target.value?
        // navigate('/results')
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