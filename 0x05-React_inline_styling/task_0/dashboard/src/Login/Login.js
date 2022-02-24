import React from 'react';
import './Login.css';
import WithLogging from "../HOC/WithLogging";

function Login() {
  return (
    <>
      <div className="App-body">
	<p>Login to access the full dashboard</p>
	<form>
	  <label htmlFor="email">Email: </label>
	  <input type="email" id="email" name="email" />
	  <label htmlFor="password">Password: </label>
	  <input type="password" id="password" name="password" />
	  <button>OK</button>
	</form>
      </div>
    </>
  );
};

const LoginWithLogging = WithLogging(Login);
export { Login as default, LoginWithLogging };
