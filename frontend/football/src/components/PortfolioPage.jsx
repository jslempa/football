import { useState } from 'react'
import Nav from './Nav'
import PlayerList from './PlayerList'

const PortfolioPage = (props) => {

    let players = props.players
    console.log(players)
  

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