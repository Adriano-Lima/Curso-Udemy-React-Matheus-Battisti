import { useEffect, useState } from 'react'
import './App.css';

//custom hook
import { useFetch } from './hooks/useFetch';


function App() {
  const [products, setProducts] = useState([])
  const url = "http://localhost:3000/products"
  //custom hook
  const { data: items, httpConfig, loading, error } = useFetch(url) //:item renomeando data para items, como alias

  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  //buscando os dados
  // useEffect(() => {
  //   const fetchData = async () => {
  //     let res = await fetch(url)
  //     res = await res.json()
  //     setProducts(res)
  //   }
  //   fetchData()
  // }, [])


  // add products
  const handleSubmit = async (e) => {
    e.preventDefault()
    const product = {
      name,
      price
    }
    // const res = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(product)
    // })
    // const addedProduct = await res.json()
    // setProducts((prevProducts) => [
    //   ...prevProducts, addedProduct
    // ])

    //refatorando post
    httpConfig(product, "POST")
    setName("")
    setPrice("")
  }

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      {loading === true ?
        (<p>Carregando dados ... </p>) : (<p></p>)
      }
      {error && <p>{error}</p> }
      {items?.map(p =>
        (<p key={p.id}>Nome:{p.name} Preço: R$ {p.price}</p>))
      }
      <div className='addProduct'>
        <form onSubmit={handleSubmit}>
          <h2>Acrescentar dados</h2>
          <label >
            Nome:
            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <label >
            Preço:
            <input type="number" name='price' value={price} onChange={(e) => setPrice(e.target.value)} />
          </label>
          {/* state de loading no post*/}
          {loading && <input type="submit" value="Aguarde" disabled />}
          {!loading && <input type="submit" value="Criar" />}
        </form>
      </div>
    </div>
  );
}

export default App;
