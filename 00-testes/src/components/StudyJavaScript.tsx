

const StudyJavaScript = () => {
    const user = {
        name: 'Adriano',
        age: 30,
        address: {
            street: 'Rua teste',
            number: 176,
        }
    }
    
    
    //desestrturacao
    const address = user.address
    const {name:nome, age, nickname='Silva'} = user
    const {address:{street} } = user

    //rest operator
    const {name, ...rest} = user

    const array = [0,1,2,3,4,5,6]
    const [first, second, third, ...res] = array


    //verificando se a propriedade existe
    const s = user?.address?.street

    return (
        <div>
            <p>{ JSON.stringify(address) }</p>
            <p>Nome:{nome}   idade:{age} {nickname}</p>
            <p>Rua:{street} </p>
            
            <p>{name} </p>
            <p>rest:{JSON.stringify(rest)} </p>

        </div>
    )
}

export default StudyJavaScript