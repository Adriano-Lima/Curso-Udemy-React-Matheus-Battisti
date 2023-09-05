import './StartScreen.css'

const StartScreen = ({startGame}) => {
  return (
    <div className='start'>
        <h1>Palavra Secreta</h1>
        <p>CLique no botão abaixo para iniciar o jogo</p>    
        <button onClick={startGame}>Começar o jogo</button>
    </div>
  )
}

export default StartScreen