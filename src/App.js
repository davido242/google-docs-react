import Docs from './components/docs';
import './App.css';
import { app, database } from './firebaseConfig';

function App() {
  return (
    <Docs database={database}/>
  );
}

export default App;