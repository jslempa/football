import axios from 'axios'
import { useState, useContext } from 'react'
import DataContext from '../DataContext'

const PlayerList = (props) => {

    console.log('player list props', props)

    const { searchResults, setSearchResults } = useContext(DataContext) 

    console.log(searchResults[0])

    return (
        <div>
            <h1></h1>
            {/* <button onClick={test}>Click me</button> */}
        </div>
    )
}

export default PlayerList