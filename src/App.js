import './App.css';
import TodoApp from './components/TodoApp';
import GlobalState from './context/GlobalState';

function App() {
  return (
    <div className="App">
      <GlobalState>
        <TodoApp/>
      </GlobalState>
    </div> 
  );
}

export default App;
