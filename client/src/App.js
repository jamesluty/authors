import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
import New from './Components/New';
import Edit from './Components/Edit';
import Error from './Components/Error';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/new" element={<New/>}/>
        <Route path="/edit/:id" element={<Edit/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </div>
  );
}

export default App;
