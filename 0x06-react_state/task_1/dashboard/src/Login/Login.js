import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import WithLogging from "../HOC/WithLogging";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      email: '',
      password: '',
      enableSubmit: false,
    };
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  };

  handleLoginSubmit(e) {
    e.preventDefault();
    this.setState({ isLoggedIn: true });
  };

  handleChangeEmail(e) {
    this.setState({ email: e.target.value }, () => {
      let enableSubmit = this.state.email !== '' && this.state.password !== '';
	this.setState({ enableSubmit });
    });
  };

  handleChangePassword(e) {
    this.setState({ password: e.target.value }, () => {
      let enableSubmit = this.state.email !== '' && this.state.password !== '';
	this.setState({ enableSubmit });
    });
  };

  render() {
    return (
      <>
	<div className={css(styles.loginStyle)} data-id="app-login">
	  <p>Login to access the full dashboard</p>
	  <form className={css(styles.smallScreen)} onSubmit={this.handleLoginSubmit}>
	    <label htmlFor="email">Email:&nbsp;
	      <input
		type="email"
		id="email"
		name="email"
		value={this.state.email}
		className={css(styles.loginInputStyle, styles.borderSmallScreen)}
		onChange={this.handleChangeEmail}
	      />
	    </label>
	    <label htmlFor="password">Password:&nbsp;
	      <input
		type="password"
		id="password"
		name="password"
		value={this.state.password}
		className={css(styles.loginInputStyle, styles.borderSmallScreen)}
		onChange={this.handleChangePassword}
	      />
	    </label>
	    <input
	      className={css(styles.buttonSmallScreen)}
	      type="submit"
	      value="Submit"
	      disabled={!this.state.enableSubmit}
	    />
	  </form>
	</div>
      </>
    );
  };
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
      width: '60px',
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
