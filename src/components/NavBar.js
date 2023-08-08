import React from 'react'
import { NavLink } from 'react-router-dom'
import Home from '../assets/Home.png'

const NavBar = () => {
  return (
    <div>
        <header className="h-20 bg-sky-500 flex items-center justify-center">
            <NavLink to="/"><img className="h-12 w-12" src={Home} alt="beer-image"/></NavLink>
        </header>
    </div>
  )
}

export default NavBar
