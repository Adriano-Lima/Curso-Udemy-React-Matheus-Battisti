import './App.css';

// config react router 
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

//pages
import Home from "./pages/Home"
import About from "./pages/About"
import Product from "./pages/Product"
import Info from "./pages/Info"
import NotFound from "./pages/NotFound"
import Search from "./pages/Search"

//components
import Navbar from './components/Navbar'
import SearchForm from './components/SearchForm';

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        <Navbar />
        {/* search */}
        <SearchForm />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          {/* rota dinamica */}
          <Route path="/products/:id" element={<Product />} />
          {/* nested route */}
          <Route path="/products/:id/info" element={<Info />} />
          {/* search */}
          <Route path="/search" element={<Search />} />
          {/* redirect (manipulacao de rotas)*/}
          <Route path="/company" element={<Navigate to="/about" />} />
          {/* no match route 404 */}
          <Route path="*" element={<NotFound />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
