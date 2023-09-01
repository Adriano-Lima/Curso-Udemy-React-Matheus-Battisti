import { useState } from "react"


const ListRender = () => {
    const [list] = useState(["Matheus","Pedro","Adriano"])
    const [users,setUsers] = useState([
        {id:1,name:"Adriano",age:30},
        {id:2,name:"Matheus",age:25},
        {id:3,name:"Thiago",age:26},
    ])
    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random()*4);
        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id)
        })

    }
  return (
    <div>
        <h1>ListRender</h1>
        <ul>
            {list.map((item,i)=> (
                <li key={i}>{item}</li>
            ))}
        </ul>
        <ul>
            {users.map((u) => (
                <li key={u.id}>Nome:{u.name} Idade:{u.age}</li>
            ))}
        </ul>
        <button onClick={deleteRandom}>Detele random user</button>
    </div>
  )
}

export default ListRender