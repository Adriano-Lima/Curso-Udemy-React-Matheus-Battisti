import './GameOver.css'

const GameOver = ({retry, score}) => {
  return (
    <div>
      <h1>Fim de jogo!</h1>
      <h2>Sua pontuação foi: {score} </h2>
      <button className='bt' onClick={retry}>Reinicar Jogo</button>
    </div>
  )
}

export default GameOver