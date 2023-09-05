

const Container = ({ children,myValue }) => {
  return (
    <div>
        <h2>Este é um titulo do Container</h2>
        {children}        
        <p>O valor é: {myValue}</p>
    </div>
  )
}

export default Container