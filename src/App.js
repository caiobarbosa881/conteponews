import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 
'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/pages/HomePage/Home';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
          <Route path='/' exact element={Home()} />
        </Routes>
    </Router>
  );
}

export default App;