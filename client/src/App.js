import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import EnterResult from './pages/app/EnterResult';
import Resources from './pages/Resources';
import SignUp from './pages/Signup';
import Login from './pages/Login';
import Contact from './pages/Contact';  

function App() {
  return (

    <main>
    
      <BrowserRouter>
      

        <Routes>
          <Route path="/" element={<Home/>} ></Route>

          <Route path="/resources" element={<Resources/>} ></Route>

          <Route path="/contact" element={<Contact/>} ></Route>

          <Route path="/signup" element={<SignUp/>} ></Route>
          
          <Route path="/login" element={<Login/>} ></Route>

          <Route path="/app/logout" element={<Home/>} ></Route>

          <Route path="/app/enter-result" element={<EnterResult/>} ></Route>

          <Route path="/app/" element={<Home/>} ></Route>

          <Route path="/app/resources" element={<Resources/>} ></Route>

          <Route path="/app/contact" element={<Contact/>} ></Route>

        
        
        </Routes>

      
      
      </BrowserRouter>
    
    </main>
  );
}

export default App;
