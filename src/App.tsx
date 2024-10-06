import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Components/Login/Login';
import MyForm from './Components/MyForm/MyForm';
// import MyForm from './components/MyForm/MyForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>I am learning react with typescript</h2>
        <Login/>
        <MyForm/>
      </header>
    </div>
  );
}

export default App;
