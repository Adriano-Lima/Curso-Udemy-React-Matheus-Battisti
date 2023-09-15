

type Props = {
    title:string
    tags:string[]
}

const Destructuring = ({title,tags}: Props) => {
  return (
    <div>
        <h2>{title}</h2>
        {tags.map( t => (
            <p key={t}>#{t}</p>
        ) )}
    </div>
  )
}

export default Destructuring