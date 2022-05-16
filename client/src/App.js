import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import EnterResult from './pages/app/EnterResult';

function App() {
  return (

    <main>
    
      <BrowserRouter>
      

        <Routes>
          <Route path="/" element={<Home/>} ></Route>

          

          <Route path="/app/enter-result" element={<EnterResult/>} ></Route>

        
        
        </Routes>

      
      
      </BrowserRouter>
    
    </main>
  );
}

export default App;
