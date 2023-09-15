import { useState } from "react"

const HookUseState = () => {
  let name = 'João'
  const [nameState, setNameState] = useState('Adriano')

  const [age, setAge] = useState(18)

  function mudarNomes() {
    name = "João Siva" //nao vai renderizar o componmete caso mude de valor
    setNameState("Adriano Lima") //renderiza o componente caso mude de valor 
    console.log(name, nameState)
  }

  function handleSubmit(e){
    e.preventDefault() //para nao recarregar a pagina ao enviar dados
    console.log(age)
  }

  return (
    <div>
      <h2>HookUseState</h2>
      <p>Variável: {name}</p>
      <p>useState: {nameState}</p>
      <button onClick={mudarNomes}>Mudar nomes</button>

      <form style={ {margin:'20px'} } onSubmit={handleSubmit}>
        <h2>Formulário</h2>
        <label>
          <p>Digite a sua idade:</p>
          <input type="number" value={age} onChange={e => setAge(e.target.value)} />
        </label>
        <input type="submit" value="Enviar" />
        <p>Você tem: {age} anos</p>
      </form>
      <hr />
    </div>
  )
}

export default HookUseState