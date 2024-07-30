import axios from 'axios'
import Button from 'react-bootstrap/Button'

const RemoveFromWatchlistButton = (props) => {

    console.log('Remove list props', props)

    // needs an input
    const removeFromWatchlist = async () => {

    }

    return (

        <Button id='remove-watchlist' onClick={removeFromWatchlist}>Stop watching</Button>

    )
}

export default RemoveFromWatchlistButton