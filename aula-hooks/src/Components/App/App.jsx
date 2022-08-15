import './App.css';
import '../Counter/Counter';
import Counter from '../Counter/Counter';
import SmartCounter from '../Smartcounter/Smartcounter';
import Ifoodcounter from '../Ifoodcounter/Ifoodcounter';

function App() {
  return (
    // 
    <>
      <h1>Hello World</h1>
      <h2>SEM ESTADO</h2>
      <Counter/>
      <h2>COM ESTADO</h2>
      <SmartCounter/>
      <h2>IFOOD EXEMPLE</h2>
      <Ifoodcounter/>
    </>
  );
}

export default App;
