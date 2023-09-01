const Challenge = () => {
    const numero1 = 10;
    const numero2 = 30;
    const calcular = () => {
        console.log(numero1+numero2)
    }
    return (
        <div>
            <h1>Component Challenge</h1>
            <h2>Soma de {numero1}+{numero2} = {numero1+numero2}</h2>
            <button onClick={calcular}>Somar</button>
        </div>
    )
}

export default Challenge