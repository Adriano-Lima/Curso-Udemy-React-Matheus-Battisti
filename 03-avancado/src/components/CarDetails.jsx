

const CarDetails = ({marca,km,cor,novo}) => {
  return (
    <div>
        <h1>CardDetails</h1>
        <ul>
            <li>Marca:{marca}</li>
            <li>KM:{km}</li>
            <li>Cor:{cor}</li>
        </ul>
        {novo && <p>Este carro é novo!!</p> }
    </div>
  )
}

export default CarDetails