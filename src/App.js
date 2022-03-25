import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 
'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/pages/HomePage/Home';
import Products from './components/pages/Products/Products';
import Services from './components/pages/Services/Services';


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
          <Route path='/' exact element={Home()} />
          <Route path='/products' element={Products()} />
          <Route path='/services' element={Services()} />
          <Route path='/services' element={Services()} />
        </Routes>
    </Router>
  );
}

export default App;