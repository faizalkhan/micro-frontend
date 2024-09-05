import logo from './logo.svg';
import './App.css';
import React from 'react';
import RemoteApp from 'app2/App';


function App() {
  return (
    <div className="App">
      <header className="App-header">
         Host Application
      </header>
      <RemoteApp />
    </div>
  );
}

export default App;
