import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent';
import Title from './components/Title';
import ShowCarDetails from './components/ShowCarDetails';

function App() {
  const n= 8
  const redTitle = true
  const carros = [
    {id:0,marca:"Fiat",modelo:"Uno",ano:1990},
    {id:1,marca:"Volkswagem",modelo:"Gol",ano:2002},
    {id:2,marca:"Chevrolet",modelo:"Astra",ano:2005}
  ]
  return (
    <div className="App">
      <h1>React com Css</h1>
      {/* css componente*/ }
      <MyComponent />
      <p>Este é um paragrafo no App.js</p>
      {/* inline CSS*/ }
      <p style={ {color:"bule",padding:"25px",borderTop:"2px solid red" } }>Este elemento foi estilzado de forma inline</p>
      {/* CSS inline dinamico*/}
      <h2 style={ n<10? ({color:"purple"}): ({color:"green"}) }>CSS Dinâmico</h2>
      {/* classe dinamica*/ }
      <h2 className={redTitle ? "red-title":"title" }>Esse titulo vai ter uma classe dinamica</h2>
      {/* module css */}
      <Title />
      {/* Desafio */ }
      <h1 className="titleCar">Show Room de carros</h1>
      <div className="car_container">
        {carros.map(
          c => (<ShowCarDetails car={c} key={c.id}/> )
        )}                
      </div>

    </div>
  );
}

export default App;
