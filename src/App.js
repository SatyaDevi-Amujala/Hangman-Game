import React from 'react';
import {BrowserRouter,Routes,Route}from 'react-router-dom';
import Level from './Level.js';
import Home from './Home.js';
import HM from './HM.js';
import Game from"./Game.js";
import Keyboard from './Keyboard';


const App = () => {
return(
  <div>
  <BrowserRouter>
  <Routes>
  <Route path='/' element={<Home />}/>
  <Route path='Level' element={<Level/>}/>
  <Route path='/Game' element={<Game/>}/>
  <Route path='/Keyboard' element={<Keyboard/>}/>
  <Route path='/HM' element={<HM/>}/>
  </Routes>
  </BrowserRouter>
  </div>
)  }
  
export default App;
