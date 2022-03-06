import React, { useState } from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";

import './App.scss';
import { Home } from './pages/Home'
import { Quoter } from './pages/Quoter'
import { Thank } from './pages/Thank'
import { NotFound } from './pages/NotFound'

import { Header } from './components/Header';
import { DataContext } from './contexts/dataContext'

const App = () => {

  const [body, setBody] = useState({
    document: '',
    celular: '',
    placa: ''
  })

  const contextValues = { body, setBody }

  return (
    <DataContext.Provider value={contextValues}>
      <div className="App">
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/arma-tu-plan" element={<Quoter />} />
            <Route path="/gracias" element={<Thank />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </DataContext.Provider>
  );
}

export default App;