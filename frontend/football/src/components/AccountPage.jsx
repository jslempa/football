import axios from 'axios'
import Nav from './Nav'
import DepositButton from './DepositButton'
import WithdrawButton from './WithdrawButton'
import DataContext from '../DataContext'
import { useState, useEffect, useContext } from 'react'

const AccountPage = () => {

    const [currentUser, setCurrentUser] = useState({
        _id: "66a79ceaa9b2ead5607bc68b",
        username: "jslempa",
        password: "111111",
        email: "fakeemail1@gmail.com",
        image: "https://placehold.co/300/green/white",
        isLoggedIn: true,
        balance: 100,
    })

    // useEffect(() => {
    //     getCurrentUser()
    //     console.log('Account page current user', currentUser)
    // }, [])  
    
    // const getCurrentUser = async () => {
    //     try {
    //       const res = await axios.get(`http://localhost:3001/users`) 
    //       let userData = res.data
    //       let loggedInUser = userData.filter(user => user.isLoggedIn === true)
    //       console.log('Logged in user:', loggedInUser)
    //       setCurrentUser(loggedInUser)
    //     } catch (error) {
    //       console.error('Error getting users:', error)
    //     }
    //   }
    


      return (
        <div className='account'>   
         
            <div>
              <img src={currentUser.image} alt='profile' />
              <h2>{currentUser.username}</h2>
              <h4>Current balance: ${currentUser.balance}</h4>
              <DepositButton />
              <WithdrawButton />
            </div>
         
          <Nav />
        </div>
      )
      
}

export default AccountPage

