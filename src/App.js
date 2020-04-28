import React, { Component } from 'react';
import './App.css';
import Formulaire from './components/Formulaire'

function App(Component) {
  return (
    <div className='App container vh-100 d-flex align-items-center'>
      <div className='col-6 mx-auto'>
        <div className='messages'>
          Message
        </div>
        <Formulaire />
      </div>
    </div>
  );
}

export default App;
