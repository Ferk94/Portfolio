import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Qbook from './components/projects/Qbook';
import FoodApp from './components/projects/FoodApp';
import Techo from './components/projects/Techo';
import './App.css';

function App() {

  

  return (
    <div className="App">
          <Routes>
            <Route index element={<Home/>}/>
            <Route exact path='/qbook' element={<Qbook/>}/>
            <Route exact path='/foodApp' element={<FoodApp/>}/>
            <Route exact path='/techo' element={<Techo/>}/>
          </Routes>
    </div>
  );
}

export default App;
