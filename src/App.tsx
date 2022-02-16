import React from 'react';
import './App.css';
import Header from './components/app/header';
import Navigation from './navigation/index';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__root">
        <Navigation />
      </div>
    </div>
  );
}

export default App;
