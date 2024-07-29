import DataContext from '../DataContext'
import Nav from './Nav'
import DepositButton from './DepositButton'
import WithdrawButton from './WithdrawButton'
import { useState, useEffect, useContext } from 'react'

const AccountPage = () => {

    const { currentUser, setCurrentUser} = useContext(DataContext)

    useEffect(() => {
        console.log('Account page current user', currentUser)
    }, [])    

    return (
        <div className='account'>
            <img src='https://placehold.co/300/green/white' />
            <h1>{currentUser[0].username}</h1>
            <DepositButton />
            <WithdrawButton />
            <Nav />
        </div>
    )
}

export default AccountPage

