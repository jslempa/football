import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {

    return (
        <nav className='nav'>
            <Link to='/portfolio'>Portfolio</Link>
            <Link to='/'>Home</Link>
            <Link to='/account'>Account</Link>
        </nav>
    )
}

export default Nav