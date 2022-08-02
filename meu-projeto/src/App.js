import logo from './logo.svg';
import './App.css';
import HelloWord from './components/HelloWord';
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';

function App() {
  return (
      <div className="App">
         <HelloWord/>  
         <SayMyName nome = "Junior"/>   
         <Pessoa
         nome= "Mauro"
         idade= "40"
         profissão= "Programador"
         foto= "http://via.placeholder.com/"
         />
         <Frase/>
         <Frase/>
      </div>
  )

}

export default App;
