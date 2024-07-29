import Button from 'react-bootstrap/Button'
import DataContext from '../DataContext'
import { useState, useEffect, useContext } from 'react'

const DepositButton = (props) => {

    console.log('Deposit', props)

    // const { currentUser, setCurrentUser} = useContext(DataContext)
    
    return (

        <Button id='deposit'>Deposit</Button>

    )
}

export default DepositButton