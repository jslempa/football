import axios from 'axios'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'

const SellButton = (props) => {

    console.log('Sell', props)

    // needs an input
    const sellShares = async () => {

    }

    return (

        <Button id='sell' onClick={sellShares}>Sell</Button>
        
    )
}

export default SellButton