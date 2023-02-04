import './App.css';
import Data from './data.json';
import TestComponent from './TestComponent';



const App: React.FC = () => {
  return (
    <div className="App">
      <header className='App-header'>
        <TestComponent text="hello from App" />
      </header>
    </div>
  );
}

export default App;
