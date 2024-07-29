import { useState, useEffect } from 'react'
import Nav from './Nav'
import PlayerList from './PlayerList'

const PortfolioPage = (props) => {

    console.log(props)

    let currentPlayers = props.players

    const [players, setPlayers] = useState([])


  

    return (
        <div className='portfolio'>
            <h1>Portfolio</h1>
            <PlayerList />
            <PlayerList />
            <Nav />
        </div>
    )
}

export default PortfolioPage