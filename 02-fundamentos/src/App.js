import logo from './logo.svg';
import './App.css';
import Button from './components/Eventos';
import FirstComponent from './components/FirstComponent';
import TemplateExpressions from './components/TemplateExpressions';
import Eventos from './components/Eventos';
import Challenge from './components/Challenge';

function App() {
  return (
    <div className="App">
      <FirstComponent></FirstComponent>
      <TemplateExpressions></TemplateExpressions>
      <Eventos></Eventos>

      <Challenge></Challenge>

  
    </div>
  );
}

export default App;
