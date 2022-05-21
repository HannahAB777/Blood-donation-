import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import EnterResult from './pages/app/EnterResult';
import Resources from './pages/Resources';
import SignUp from './pages/Signup';
import Login from './pages/Login';
import Contact from './pages/Contact'; 
import PublicLayout from './layouts/PublicLayout';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';


const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});


function App() {
  return (
    <ApolloProvider client={client}>
    <main>
    <PublicLayout>
      <BrowserRouter>
     

        <Routes>
          <Route path="/" element={<Home/>} ></Route>

          <Route path="/resources" element={<Resources/>} ></Route>

          <Route path="/contact" element={<Contact/>} ></Route>

          <Route path="/signup" element={<SignUp/>} ></Route>
          
          <Route path="/login" element={<Login/>} ></Route>

          <Route path="/app/logout" element={<Home/>} ></Route>

          <Route path="/app/enter-result" element={<EnterResult/>} ></Route>

          <Route path="/app/" element={<Home/>} ></Route>3

          <Route path='*' element={<h1 className='display-2'>Wrong page!</h1>} />
        
        </Routes>

        
      
      </BrowserRouter>
      </PublicLayout>
    
    </main>
    </ApolloProvider>
  );
}

export default App;
