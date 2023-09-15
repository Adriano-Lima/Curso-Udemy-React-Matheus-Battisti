
import './App.css';
import Destructuring from './components/Destructuring';
import State from './components/State';

function App() {
  return (
    <div className="App">
      <Destructuring title="Teste de desestruturacao" tags={["react", "typescript"]} />
      <State />
    </div>
  );
}

export default App;
