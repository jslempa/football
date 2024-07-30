import axios from 'axios'
import Nav from './Nav'
import PlayerList from './PlayerList'
import DataContext from '../DataContext'
import { useState, useEffect, useContext } from 'react'

const PortfolioPage = (props) => {

    const [test, setTest] = useState(null)

    console.log('props', props)

    let thisUserID = props.user[0]._id

    console.log('current user ID', thisUserID)

    // const [currentUser, setCurrentUser] = useState({
    //     _id: "66a79ceaa9b2ead5607bc68b",
    //     username: "jslempa",
    //     password: "111111",
    //     email: "fakeemail1@gmail.com",
    //     image: "https://placehold.co/300/green/white",
    //     isLoggedIn: true,
    //     balance: 100,
    // })





  

    return (
        <div className='portfolio'>
            <h1>{props.user[0].username}'s portfolio</h1>
            <PlayerList />
            <PlayerList />
            <Nav />
        </div>
    )
}

export default PortfolioPage