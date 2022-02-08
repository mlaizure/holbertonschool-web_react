import React from 'react';
import logo from './holberton-logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
	<h1>School dashboard</h1>
      </div>
      <hr />
      <div className="App-body">
	<p>Login to access the full dashboard</p>
      </div>
      <hr />
      <div className="App-footer">
	<p>Copyright 2020 - holberton School</p>
      </div>
    </div>
  );
}

export default App;
