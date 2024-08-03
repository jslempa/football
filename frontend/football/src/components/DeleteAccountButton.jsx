import DataContext from '../DataContext'
import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

const DeleteAccountButton = () => {

    const {currentUser, setCurrentUser, currentPortfolio, setCurrentPortfolio, currentWatchlist, setCurrentWatchlist, playersInPorfolio, setPlayersInPortfolio, playersInWatchlist, setPlayersInWatchlist, idsInPortfolio, setIdsInPortfolio, idsInWatchlist, setIdsInWatchlist, searchResults, setSearchResults, selectedPlayer, setSelectedPlayer, showPlayer, players} = useContext(DataContext)

    const deleteAccount = async () => {
        try {
            const res = await axios.delete('https://jsonplaceholder.typicode.com/posts/1');
            console.log('Response:', response.data);
          } catch (error) {
            console.error('There was an error deleting the data:', error);
          }
        }      

    return (
        
        <Button id='delete-account' onClick={deleteAccount}>Delete Account</Button>

    )
}

export default DeleteAccountButton