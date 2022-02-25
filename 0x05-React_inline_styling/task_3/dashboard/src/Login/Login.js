import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import WithLogging from "../HOC/WithLogging";

function Login() {
  return (
    <>
      <div className={css(styles.loginStyle)} data-id="app-login">
	<p>Login to access the full dashboard</p>
	<form className={css(styles.smallScreen)}>
	  <label htmlFor="email">Email: <input type="email" id="email" name="email" className={css(styles.loginInputStyle, styles.borderSmallScreen)} />
</label>
	  <label htmlFor="password">Password: <input type="password" id="password" name="password" className={css(styles.loginInputStyle, styles.borderSmallScreen)} />
</label>
	  <button className={css(styles.buttonSmallScreen)}>OK</button>
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

  smallScreen: {
    '@media (max-width: 900px)': {
      display: 'grid',
      justifyContent: 'start',
    },
  },

  buttonSmallScreen: {
    '@media (max-width: 900px)': {
      width: '36px',
      border: '3px solid rgba(218, 165, 32, 0.7)',
      borderRadius: '5px',
      backgroundColor: 'transparent',
    },
  },

  borderSmallScreen: {
    '@media (max-width: 900px)': {
      border: 'none',
    },
  },
});

const LoginWithLogging = WithLogging(Login);
export { Login as default, LoginWithLogging };
