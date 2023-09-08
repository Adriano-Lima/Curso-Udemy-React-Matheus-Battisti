//import { useContext } from "react"
//import { CounterContext } from "../context/CounterContext"
import ChangeCounter from "../components/ChangeCounter"

//refatorando
import { useCounterContext } from "../hooks/useCounterContext"

import { useTitleColorContext } from "../hooks/useTitleColorContext"

const Home = () => {
  //const {counter} = useContext(CounterContext)
  //refatorando com hook
  const {counter} = useCounterContext()

  //context mais complexo
  const {color, dispatch} = useTitleColorContext()
  //alterando context complexo
  const setTitleColor = (color) =>{
    dispatch({type:color})
  }

  return (
    <div>
      <h1 style={{color: color}}> Bem vindo ... (App criado com Vite)</h1>
      <h2>Valor no context: {counter}</h2>
      <ChangeCounter />
      {/* alterando context */}
      <button onClick={()=> setTitleColor("RED")}>Vermelho</button>
      <button onClick={()=> setTitleColor("BLUE")}>Azul</button>
    </div>
  )
}

export default Home