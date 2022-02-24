import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import WithLogging from "../HOC/WithLogging";

function Login() {
  return (
    <>
      <div className={css(styles.loginStyle)} data-id="app-login">
	<p>Login to access the full dashboard</p>
	<form>
	  <label htmlFor="email">Email: </label>
	  <input type="email" id="email" name="email" className={css(styles.loginInputStyle)} />
	  <label htmlFor="password">Password: </label>
	  <input type="password" id="password" name="password" className={css(styles.loginInputStyle)} />
	  <button>OK</button>
	</form>
      </div>
    </>
  );
};

const styles = StyleSheet.create({
  loginStyle: {
    minHeight: '30vh',
    margin: '3rem 0rem 2rem 2rem',
  },

  loginInputStyle: {
    marginRight: '1rem',
  },
});

const LoginWithLogging = WithLogging(Login);
export { Login as default, LoginWithLogging };
