
const UserDatails = ({ pessoas }) => {
  return (
    <div>
        <h2>UserDatails</h2>
        <ul>
            {pessoas.map((p) => 
            <li key={p.id}>Nome: {p.nome}, Profissão: {p.profissao}, idade: {p.idade}
            {p.idade >=18?
            (<p>Pode tirar a carteira</p>) :
            (<p>Não tem idade para  tirar a carteira</p>)            
            }
            </li>
            )}
        </ul>
    </div>
  )
}

export default UserDatails