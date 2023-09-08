import './Home.css'
import { Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

const Home = () => {
  const url = "http://localhost:3000/products"
  const {data: itens, error} = useFetch(url)
  return (
    <div>
      <h1> Home </h1>
      <h2>Produtos</h2>
      {error && <p>{error}</p>}
      <div className='products'>
        {itens?.map(i => (<p key={i.id}>Nome: {i.name}
        <Link to={`/products/${i.id}`}> Detalhes</Link>
          </p>))}

      </div>
    </div>
  )
}

export default Home