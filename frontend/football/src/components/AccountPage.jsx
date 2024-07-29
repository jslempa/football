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
            <h1>Account</h1>
            <DepositButton />
            <WithdrawButton />
            <Nav />
        </div>
    )
}

export default AccountPage