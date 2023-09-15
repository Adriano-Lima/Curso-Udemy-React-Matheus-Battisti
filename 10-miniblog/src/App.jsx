import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import { onAuthStateChanged } from 'firebase/auth'  //verifica se o usuario esta autenticado 
/** hooks */
import { useState, useEffect } from 'react'
import { useAuthentication } from './hooks/useAuthentication'

/** context */
import { AuthProvider } from './context/AuthContext'

/** components */
import Footer from './components/Footer'
import Navbar from './components/Navbar'

// ** pages */
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Register from './pages/Register'
import CreatePost from './pages/CreatePost'
import Dashboard from './pages/Dashboard'
import EditPost from './pages/EditPost'
import Post from './pages/Post'
import Search from './pages/Search'

function App() {
  const [user, setUSer] = useState(undefined)
  const { auth } = useAuthentication()

  const loadingUser = user === undefined

  useEffect(() => {
    onAuthStateChanged(auth, (user) => { setUSer(user) })
  }, [auth])

  if (loadingUser) {
    return <p>Carregando ...</p>
  }

  return (
    <div className="App">
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <Navbar />
          <div className='container'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route
                path="/posts/create"
                element={user ? <CreatePost /> : <Navigate to="/login" />}
              />
              <Route
                path="/posts/edit/:id"
                element={user ? <EditPost /> : <Navigate to="/login" />}
              />
              <Route path="/posts/:id" element={<Post />} />
              <Route path="/search" element={<Search />} />
              <Route
                path="/login"
                element={!user ? <Login /> : <Navigate to="/" />}
              />
              <Route
                path="/register"
                element={!user ? <Register /> : <Navigate to="/" />}
              />
              <Route
                path="/dashboard"
                element={user ? <Dashboard /> : <Navigate to="/login" />}
              />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  )
}

export default App
