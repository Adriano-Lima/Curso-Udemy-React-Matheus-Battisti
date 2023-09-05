import { useState } from 'react'
import './App.css'
import City from './assets/city.jpg'
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'
import Container from './components/Container'
import ExecuteFunction from './components/ExecuteFunction'
import Message from './components/Message'
import ChangeMessageState from './components/ChangeMessageState'
import UserDatails from './components/UserDatails'


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

  function showMessage(){
    console.log("Evento do componente pai!")
  }

  const [message,setMessage] = useState("")
  const handleMessage = (msg) => {
    setMessage(msg)
  }

  const [pessoas, setPessoas] = useState([
    {id:0, nome:"Adriano",idade:30,profissao:"Web"},
    {id:1, nome:"Matheus",idade:28,profissao:"Android"},
    {id:2, nome:"Thiago",idade:17,profissao:"Estudante"}
  ])

  function mudarPessoas(pessoa){
    setPessoas(pessoa)
  }


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
        <CarDetails key={c.id} marca={c.marca} km={c.km} cor={c.cor} novo={c.novo} />
      ) )}
      {/* children prop*/}
      <Container myValue="teste">
        <p>E este é um conteudo dentro de App.jsx</p>
      </Container>
      {/* executar funcao*/}
      <ExecuteFunction minhaFuncao={showMessage}/>
      {/* state lift*/}
      <Message msg={message}></Message>
      <ChangeMessageState handleMessage={handleMessage}/>
      {/* desafio */ }  
      <UserDatails pessoas={pessoas}/>

    </div>
  )
}

export default App
