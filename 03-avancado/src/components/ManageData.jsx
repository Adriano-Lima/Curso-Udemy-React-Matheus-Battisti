import { useState } from "react";

const ManageData = () => {
    let somedata = 10
    const [number,setNumber] = useState(5)
    // setNumber = () => {
    //     number = number + 5
    //     console.log("valor atual >>:"+number)
    // }
  
    return (
    <div>
        <div>
            <h1>ManageData</h1>
            <p>Valor: {somedata}</p>
            <button onClick={() => (somedata = 15)}>Mudar valor</button>
        </div>
        <div>
            <p>Valor: {number}</p>
            <button onClick={() => setNumber(20)}>Mudar valor</button>
        </div>
    </div>
  )
}

export default ManageData