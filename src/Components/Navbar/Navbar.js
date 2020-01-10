import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav>
        <h1 id='title'>PROSPECT TRACKER</h1>
        <Link to="/create-new-prospect"><h3 id='create-button'>Create New Prospect</h3></Link>
      </nav>
    </>
  )
}

export default Navbar
