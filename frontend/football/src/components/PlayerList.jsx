import axios from 'axios'
import { useState } from 'react'

const PlayerList = () => {

    const [currentUser, setCurrentUser] = useState({
        _id: "66a79ceaa9b2ead5607bc68b",
        username: "jslempa",
        password: "111111",
        email: "fakeemail1@gmail.com",
        image: "https://placehold.co/300/green/white",
        isLoggedIn: true,
        balance: 100,
    })

    const [ownedPlayers, setOwnedPlayers] = useState([])

    

    return (
        <div>
            <h1></h1>
            {/* <button onClick={test}>Click me</button> */}
        </div>
    )
}

export default PlayerList