import './App.css';
import Checkbox from './Checked';
import ContextProvider from './ContextProvider';

function App() {
  return (
    <div className="App">
    <ContextProvider>
    <Checkbox />
    </ContextProvider>
      
  
    </div>
  );
}

export default App;