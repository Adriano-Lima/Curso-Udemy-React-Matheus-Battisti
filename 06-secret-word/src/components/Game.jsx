import { useState, useRef } from 'react'
import './Game.css'

const Game = ({verifyLetter,pickedWord,pickedCategory,letters,guessedLetters,wrongLetters,useLetters,guesses,score}) => {
  const [letter,setLetter] = useState("")
  const letterInputRef = useRef(null)
  const handleSubmit = (e) => {
    e.preventDefault()
    verifyLetter(letter)
    setLetter("")
    letterInputRef.current.focus()
  }
  return (
    <div className='game'>
      <p className='points'>
        <span>Pontuação: {score}</span>
      </p>
      <h1>Adivinhe a palavra:</h1>
      <h3 className='tip'>Dica sobre a palavra: 
      <span> {pickedCategory}</span>
      </h3>
      <p>Você ainda tem {guesses} tentativa(s).</p>
      <div className='wordContainer'>        
        {letters.map( (l,i)=>(
          guessedLetters.includes(l) ?
          ( <span key={i} className='letter'>{l}</span> ) :
          ( <span key={i} className='blankSquare'></span> )
        ) )}
      </div>
      <div className="letterContainer">
        <p>Tente advinhar uma letra da palavra:</p>
        <form onSubmit={handleSubmit}>
          <input type="text" ref={letterInputRef} name="letter" maxLength="1" required onChange={(e) => setLetter(e.target.value)} value={letter} />
          <button>Jogar</button>
        </form>
      </div>
      <div className="wrongLettersContainer">
        {useLetters.map( (l,i) =>
          ( <span key={i}>{l},</span> )
        )}
      </div>
    </div>
  )
}

export default Game