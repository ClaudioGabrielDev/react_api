import React, { Component } from 'react';
import './style.css';

import api from './services/api.js';

import Main from './pages/main'

import Header from './components/Header';

const App = () => (
  <div className="App">
    <Header />
    <Main />
  </div>
);

 

export default App;
