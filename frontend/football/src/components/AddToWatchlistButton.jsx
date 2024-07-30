import axios from 'axios'
import Button from 'react-bootstrap/Button'

const AddToWatchlistButton = (props) => {

    console.log('Add list props', props)

    // needs an input
    const addToWatchlist = async () => {

    }

    return (

        <Button id='add-watchlist' onClick={addToWatchlist}>Watch</Button>

    )
}

export default AddToWatchlistButton