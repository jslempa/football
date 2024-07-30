import React from 'react'
import { useNavigate, useNavigation } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const SearchBar = () => {

    let navigate = useNavigate()

    return (

        <InputGroup className="mb-3">
        <Form.Control
          placeholder="Search players"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2">
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