import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/holberton-logo.jpg';
import { logout } from '../actions/uiActionCreators.js';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    return (
      <>
	<div className={css(styles.headerStyle)} data-id="app-header">
	  <img src={logo} className={css(styles.headerImgStyle)} alt="logo" />
	  <h1 className={css(styles.headerH1Style)}>School dashboard</h1>
	</div>
	{
	  this.props.isLoggedIn
	    ? <section id="logoutSection">
		Welcome <b>{this.props.user.email}</b> <a className={css(styles.logout)} onClick={this.props.logout}>(logout)</a>
	      </section>
	  : null
	}
      </>
    );
  };
};

const styles = StyleSheet.create({
  headerStyle: {
    display: 'flex',
    alignItems: 'center',
    height: '25vh',
  },
  headerImgStyle: {
    height: '100%',
  },
  headerH1Style: {
    fontSize: '4.7vh',
    marginLeft: '1rem',
    color: '#E0344B',
  },
  logout: {
    cursor: 'pointer',
    fontStyle: 'italic',
  },
});

Header.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func,
  isLoggedIn: PropTypes.bool,
};

Header.defaultProps = {
  user: {},
  logout: () => { },
  isLoggedIn: false,
};

function mapDispatchToProps(dispatch) {
  return { logout: () => dispatch(logout()), }
}

function mapStateToProps(state) {
  return {
    user: state.toJS().user,
    isLoggedIn: state.toJS().isUserLoggedIn,
  };
}

const ConnectedHeader = connect(mapStateToProps, mapDispatchToProps)(Header);

export { Header as default, ConnectedHeader };
