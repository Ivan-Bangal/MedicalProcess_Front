import React from 'react';

import './App.css';
import Header from './components/header/Header';
import { Toolbar } from '@mui/material';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">

      <Header />
      <Toolbar />

      <Home />

    </div>
  );
}

export default App;
