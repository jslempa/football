import { useEffect, useState } from 'react'
import { Routes, Route, createPath } from 'react-router-dom' 
import { BASE_URL } from './globals'
import playersArray from './data/playersArray'
import './App.css'
import axios from 'axios'
import DataContext from './DataContext'
import Login from './components/Login'
import HomePage from './components/HomePage'
import PortfolioPage from './components/PortfolioPage'
import AccountPage from './components/AccountPage'

function App() {

  const test = null

  // all players loaded
  // rookies set
  // set stats

  const [users, setUsers] = useState({})

  useEffect(() => {
    getUsers()
    console.log('Got users')
  }, [])  


  // works
  const getUsers = async () => {
    try {
      const res = await axios.get(`http://localhost:3001/users`) 
      let userData = res.data
      console.log(userData)
      setUsers(userData)
    } catch (error) {
      console.error('Error getting users:', error)
    }
 }

 


  const checkState = () => {
    console.log('Users', users)
 }





  return (
  <div> 
    <div>

   <button onClick={getUsers}>Get users</button>
   <button onClick={checkState}>Check state</button>

      

    </div>

    <div className='app'> 
      <DataContext.Provider value={{test}}>
        {/* <Login /> */}
      <Routes>
        <Route path='/' element={ <HomePage />}/>
        <Route path='/portfolio' element={ <PortfolioPage />}/>
        <Route path='/account' element={ <AccountPage />}/>
      </Routes>   
      </DataContext.Provider>  
    </div>
    </div>   
  )
}

export default App
