import './Navbar.css'

import { Link, NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav >
      {/* <Link to="/">Home</Link>
        <Link to="/about">Sobre</Link> */}
        {/*setar uma classe se a rota sta ativa ou nao   className={ ({isActive}) => ( isActive? ("estaAtivo"): ("naoAtivo") ) } */}
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">Sobre</NavLink>

    </nav>
  )
}

export default Navbar