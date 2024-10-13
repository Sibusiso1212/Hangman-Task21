import './App.css';
import Hangman from './Hangman';
import Help from './Help';

/*Display the Hangman game and Help button*/
function App() {
  return (
    <div className="App">
      <h1><u>Hangman Game</u></h1>
      <br/>
      <Hangman/> 
      <Help/> 
      <br/><br/>    
    </div>
  );
}

export default App;
