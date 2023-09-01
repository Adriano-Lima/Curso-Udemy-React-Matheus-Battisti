import { useState } from 'react'
import './App.css'
import City from './assets/city.jpg'
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'


function App() {
  const [count, setCount] = useState(0)
  const carro = {
    marca: "Fiat",
    km: 15000,
    cor: "Branco"
  }

  const carros = [
    {id:1, marca: "Fiat", km: 15000, cor: "Vermelha", novo: false},
    {id:2, marca: "Volks", km: 20000, cor: "Azul", novo:false},
    {id:3, marca: "Tesla", km: 0, cor: "Branco",novo:true}
  ]


  return (
    <div>
      <h1>Seção 3 - Avançando em React</h1>
      {/* imagem em public*/ }
      <img src="/img1.jpg" alt="Paisagem" />
      {/* imagem em assets*/ }
      <img src={City} alt="Cidade" />
      <ManageData/>
      <ListRender/>
      <ConditionalRender/>
      <ShowUserName name="Adriano" />
      <CarDetails marca={carro.marca} km={carro.km} cor={carro.cor} novo={false} />
      {/* reaproveitando*/ }
      <CarDetails marca="BMW" km={15000} cor="Cinza" novo={true} />
      <CarDetails marca="Ford" km={0} cor="Azul" novo={false} />
      {/* loop em array*/ }
      {carros.map( (c) => (
        <CarDetails marca={c.marca} km={c.km} cor={c.cor} novo={c.novo} />
      ) )}

    </div>
  )
}

export default App
