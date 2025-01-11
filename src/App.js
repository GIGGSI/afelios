import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from "react-router-dom";
import HomePage from './components/pages/HomePage';
import LaughingGasPage from './components/pages/LaughingGasPage';
import IcePage from './components/pages/IcePage';
import ScrollToTop from './ScrollToTheTop';

import UnderConstruction from './components/UnderConstruction/UnderConstruction'

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route exact path='/' element={<UnderConstruction />} />
        {/* <Route path='/laughing-gas' element={<LaughingGasPage />} />
        <Route path='/ice' element={<IcePage />} /> */}
      </Routes>
    </>
  );
}

export default App;
