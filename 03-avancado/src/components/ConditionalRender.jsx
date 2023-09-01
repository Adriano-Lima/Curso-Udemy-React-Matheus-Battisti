import {useState} from "react"

const ConditionalRender = () => {
    const [x,setX] = useState(true)
    const mudarValor = () =>{
        setX((prevX) =>{
            return !prevX
        })
    }

    const [name,setName] = useState("Joao")
    const mudarNome = () => {
        setName((prevName) => {
            return prevName+"-"
        } 
        )
    }
    
  return (
    <div>
        <h1>ConditionalRender</h1>
        <h1>Isso será exibido?</h1>
        {x && <h3> Se x for true, sim!</h3> }
        <button onClick={mudarValor}>Mudar valor de X</button>

        {name === "João" ? (
            <div>
                <p>O nome é João</p>
            </div>  
        ) : (
            <div>
            <p>O nome não é João, o nome é: {name}</p>
        </div>  
        )}
        <button onClick={mudarNome}>Mudar Nome</button>

    </div>
  )
}

export default ConditionalRender