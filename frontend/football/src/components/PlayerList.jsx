import axios from 'axios'
import { useContext } from 'react'
import DataContext from '../DataContext'

const PlayerList = () => {

    const { test } = useContext(DataContext)

    return (
        <div>
            <h1>Player list</h1>
            <button onClick={test}>Click me</button>
        </div>
    )
}

export default PlayerList