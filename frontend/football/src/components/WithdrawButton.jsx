import Button from 'react-bootstrap/Button'
import DataContext from '../DataContext'
import { useState, useEffect, useContext } from 'react'

const WithdrawButton = () => {

    const { currentUser, setCurrentUser} = useContext(DataContext)

    const withdrawFunds = async () => {
        try {
          const res = await axios.put(`http://localhost:3001/users/${currentUser[0]._id}`, {
            balance: 100
          })
          console.log('Balance updated:', res.data)
        } catch (error) {
          console.error('Error updating balance:', error)
        }
      }

    return (

        <Button id='withdraw' onClick={withdrawFunds}>Withdraw</Button>

    )
}

export default WithdrawButton