import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex flex-row gap-4 place-content-around p-4'>
      <NavLink to="/">
        Home
      </NavLink>
      <NavLink to="/pastes">
        All Pastes
      </NavLink>
    </div>
  )
}

export default Navbar
