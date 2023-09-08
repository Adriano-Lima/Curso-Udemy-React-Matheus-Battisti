import { useParams } from "react-router-dom"

const Info = () => {
    const {id} = useParams()
  return (
    <div>
        <h1>Info</h1>
        <h2>Mais informações do produto: {id}</h2>
    </div>
  )
}

export default Info