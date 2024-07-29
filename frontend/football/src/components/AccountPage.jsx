import axios from 'axios'
import Nav from './Nav'
import DepositButton from './DepositButton'
import WithdrawButton from './WithdrawButton'
import DataContext from '../DataContext'
import { useState, useEffect, useContext } from 'react'

const AccountPage = (props) => {

  console.log('Account props', props)

    // const [currentUser, setCurrentUser] = useState({
    //     _id: "66a79ceaa9b2ead5607bc68b",
    //     username: "jslempa",
    //     password: "111111",
    //     email: "fakeemail1@gmail.com",
    //     image: "https://placehold.co/300/green/white",
    //     isLoggedIn: true,
    //     balance: 100,
    // })   


    return (
        <div className='account'>   
         
            <div className='account-content'>
              <img src={props.user[0].image} alt='profile' />
              <h2>{props.user[0].username}</h2>
              <h4>Current balance: ${props.user[0].balance}</h4>
              <DepositButton user={props.user[0]}/>
              <WithdrawButton user={props.user[0]}/>
            </div>
         
          <Nav />
        </div>
      )
      
}

export default AccountPage

