const TemplateExpressions = () => {
    const name = "Adriano"
    const data = {
        idade: 30,
        profissao: "Programador"
    }
    return(
        <div>
            <h1>Bem  vindo {name}!</h1>
            <p>O {name} tem {data.idade} anos de idade. </p>
            <p>e trabalha como: {data.profissao}</p>  
        </div>
    )
}

export default TemplateExpressions