import React from 'react';
import './App.css';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';

function App() {
  return (
    <>
      <Notifications />
      <div className="App">
	<Header />
	<hr />
	<Login />
	<hr />
	<Footer />
      </div>
    </>
  );
};

export default App;
