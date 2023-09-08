import './Navbar.css'

import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">Sobre</NavLink>
        <NavLink to="/sasasaaa">404</NavLink>
    </nav>
  )
}

export default Navbar