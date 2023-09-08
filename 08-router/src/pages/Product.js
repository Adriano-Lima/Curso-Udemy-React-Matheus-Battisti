import { Link, useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

const Product = () => {
    const {id} = useParams()
    const url = "http://localhost:3000/products/" + id
    const {data:product,loding,error} = useFetch(url) 
  return (
    <div>
        <p>Id do produto: {id}</p>
        {error && <p>Ocorreu em erro ...</p> }
        {loding && <p>Carregando...</p> }
        {product && (
            <div>
                <h2>{product.name}</h2>
                <h3>R$ {product.price}</h3>
                {/* nested routes */}
                <Link to={`/products/${id}/info`}>Mais informções</Link>
            </div>
        )}
    </div>
  )
}

export default Product