import axios from 'axios'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'

const BuyButton = (props) => {

    console.log('Buy', props)

    // needs an input
    const buyShares = async () => {

    }
    
    return (
        
        <Button id='buy' onClick={buyShares}>Buy</Button>

    )
}

export default BuyButton