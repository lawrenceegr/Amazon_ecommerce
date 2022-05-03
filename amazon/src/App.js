
import './App.css';
import {BrowserRouter  ,Routes, Route } from 'react-router-dom';

import Home from './Home';
import Header from './Header';
import NavBar from './Navbar';
import Products from './Products';
import Movies from './Movies';




function App() {

  return (
    
    <div className="App">
       <BrowserRouter>

          <NavBar/>
          <Header/> 
          <Routes>
              <Route path="/" element={<Home/>}/>
          </Routes>     
          <Products/>
          <Movies/>
          
             
      </BrowserRouter>
 

  
    </div>
  );
}

export default App;
