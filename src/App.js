import './App.css';
import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import Login from './components/Login';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
  
    <div className="App">
      <BrowserRouter>
      <Header/>
      < Routes>
                <Route  exact path="/" element={<Login/>} />  
                <Route  exact path="/home" element={<Home/>} />  
                
      </ Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
