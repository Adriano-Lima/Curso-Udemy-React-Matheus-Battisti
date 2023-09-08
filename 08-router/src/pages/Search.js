import { useSearchParams, Link } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

const Search = () => {
    const [searchParams] = useSearchParams()
    const url = "http://localhost:3000/products?" + searchParams
    const { data: itens, loading, error } = useFetch(url)
    return (
        <div>
            <h1>Resultados disponiveis</h1>
            <div className='products'>
                {itens?.map(i => (<p key={i.id}>Nome: {i.name}
                    <Link to={`/products/${i.id}`}> Detalhes</Link>
                </p>))}

            </div>
        </div>
    )
}

export default Search