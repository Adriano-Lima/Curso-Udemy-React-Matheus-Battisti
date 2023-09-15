import styles from './Navbar.module.css'
import { NavLink } from 'react-router-dom'
import { useAuthentication } from '../hooks/useAuthentication'
import { useAuthContext } from '../context/AuthContext'

const Navbar = () => {
    const { user } = useAuthContext()
    const { logout } = useAuthentication()
    console.log(JSON.stringify(user))
    return (
        <nav className={styles.navbar}>
            <NavLink to="/" className={styles.brand}>
                <span>Mini Blog</span>
                {user && <span style={{color:"blue", marginLeft:'30px'}}> Bem Vindo: {user.displayName} --- {user.email}</span> }
            </NavLink>
            <ul className={styles.links_list}>
                <li>
                    <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : "")}>Home</NavLink>
                </li>
                {!user && (
                    <>
                        <li>
                            <NavLink to="/login" className={({ isActive }) => (isActive ? styles.active : "")}>Entrar</NavLink>
                        </li>
                        <li>
                            <NavLink to="/register" className={({ isActive }) => (isActive ? styles.active : "")}>Cadastrar</NavLink>
                        </li>
                    </>
                )}
                {user && (
                    <>
                        <li>
                            <NavLink to="/posts/create" className={({ isActive }) => (isActive ? styles.active : "")}>Novo post</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard" className={({ isActive }) => (isActive ? styles.active : "")}>Dashboard</NavLink>
                        </li>
                    </>
                )}
                <li>
                    <NavLink to="/about" className={({ isActive }) => (isActive ? styles.active : "")}>Sobre</NavLink>
                </li>
                {user && (
                    <li>
                        <a onClick={logout}>Sair</a>
                    </li>
                )}
            </ul>
        </nav>
    )
}

export default Navbar