import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Header from './components/Header'
import SubHeader from './components/SubHeader';
import Card from './components/Card';
import Pant from './components/SubheaderOption/Pant';
import Shirts from './components/SubheaderOption/Shirt';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {

  let [inputState, setInputState] = useState('sample');
  return (

    <>
      <BrowserRouter>
        <Header setInputState={setInputState}/>
        <SubHeader/>
        <Routes>
          <Route path='/' element={<Card inputState={inputState}/>}/>
          <Route path='/pants' element={<Pant/>}/>
          <Route path='/shirts' element={<Shirts/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
