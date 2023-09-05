

const ChangeMessageState = ({ handleMessage }) => {
    const messages = ["oi","olá", "oi, tudo bem?"]
  return (
    <div>
        <h2>ChangeMessageState</h2>
        <button onClick={() => handleMessage(messages[0])}>1</button>
        <button onClick={() => handleMessage(messages[1])}>2</button>
        <button onClick={() => handleMessage(messages[2])}>3</button>
    </div>
  )
}

export default ChangeMessageState