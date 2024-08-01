import axios from 'axios'
import { useState, useEffect, useContext } from 'react'
import DataContext from '../DataContext'
import Button from 'react-bootstrap/Button'

const AddToWatchlistButton = (props) => {

    console.log('add watchlist', props)

    const {currentUser, setCurrentUser, currentPortfolio, setCurrentPortfolio, currentWatchlist, setCurrentWatchlist, playersInPorfolio, setPlayersInPortfolio, playersInWatchlist, setPlayersInWatchlist, searchResults, setSearchResults, selectedPlayer, setSelectedPlayer, showPlayer, players} = useContext(DataContext)

    console.log('current watchlist', currentWatchlist)

    // const addToWatchlist = async () => {
    //     try {
    //       // Fetch the existing user data from the backend (optional step if you need the current state)
    //       const res = await axios.get(`http://localhost:3001/watchlists/user/${currentUser._id}`)
    //       const watchedPlayers = res.data
      
    //       // Create the updated user object using the spread operator
    //       const updatedWatchlist = {
    //         ...existingUser,
    //         ...updates
    //       };
      
    //       // Send the updated user data to the backend using PUT request
    //       const res = await axios.put(`http://localhost:3001/users/${userId}`, updatedUser);
    //       console.log('User updated:', res.data);
    //     } catch (error) {
    //       console.error('Error updating user:', error);
    //     }
    //   };
  
    
    // needs an input
    // const addToWatchlist = async () => {
    //     await axios.get(`http://localhost:3001/watchlists/user/${currentUser._id}`)
    //         .then(res => {
    //             const watchedPlayers = res.data
    //             console.log(watchedPlayers)
    //             // console.log('before', watchedPlayers)
    //             // watchedPlayers.push(props.player)
    //             // console.log('after', watchedPlayers)
    //             // return axios.put(`http://localhost:3001/watchlists/user/${currentUser._id}`, {
    //             //     players: watchedPlayers
    //             // })
    //         })
    //         .then(res => {
    //             console.log('Watchlist updated:', res.data)
    //         })
    //         .catch(error => {
    //             console.error('Error updating watchlist:', error)
    //         })
    // }


    const addToWatchlist = async () => {
      try {
          const updatedPlayers = [...currentWatchlist[0].players, props.player._id]
  
          const res = await axios.put(`http://localhost:3001/watchlists/${currentWatchlist[0]._id}`, {
              ...currentWatchlist[0],
              players: updatedPlayers
          })  
          console.log('Watchlist updated:', res.data)
      } catch (error) {
          console.error('Error updating watchlist:', error)
      }
    }
  


    // const addToWatchlist = async () => {

    //   console.log('current watchlist', currentWatchlist)
    //   console.log('player id', props.player._id)
        
    //         const res = await axios.put(`http://localhost:3001/watchlists/${currentWatchlist[0]._id}`, {
    //             ...currentWatchlist[0],
    //             players: players.push(props.player._id)
    //         })   
    // }



    // SAVE
    // const addToWatchlist = async () => {
    //     if (currentWatchlist.length > 0) {
    //         const res = await axios.put(`http://localhost:3001/watchlists/user/${currentUser._id}`, {
    //             ...currentWatchlist,
    //             players: props.player
    //         })
    //     } else {
    //         const res = await axios.put(`http://localhost:3001/watchlists/user/${currentUser._id}`, {
    //             ...currentWatchlist,
    //             players: players.push(props.player)
    //         })
    //     }
    // }

    const makeRookies = async () => {
        await rookies.forEach(rookie => {
          const res = axios.put(`http://localhost:3001/players/espn/${rookie.espnID}`, {
            isRookie: true
          })
        })
      }
    

    return (
        <Button id='add-watchlist' onClick={addToWatchlist}>Watch</Button>
    )
}

export default AddToWatchlistButton