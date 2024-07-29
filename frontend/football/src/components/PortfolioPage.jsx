import Nav from './Nav'
import PlayerList from './PlayerList'
import DataContext from '../DataContext'
import { useState, useEffect, useContext } from 'react'

const PortfolioPage = () => {

    const { currentUser, setCurrentUser} = useContext(DataContext)

    useEffect(() => {
        console.log('Portfolio page current user', currentUser)
    }, [])  
    




  

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