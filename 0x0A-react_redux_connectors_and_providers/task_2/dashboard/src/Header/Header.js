import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/holberton-logo.jpg';
import { logout } from '../actions/uiActionCreators.js';

class Header extends React.Component {
  render() {
    return (
      <>
	<div className={css(styles.headerStyle)} data-id="app-header">
	  <img src={logo} className={css(styles.headerImgStyle)} alt="logo" />
	  <h1 className={css(styles.headerH1Style)}>School dashboard</h1>
	</div>
	{
	  this.props.user.isLoggedIn
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
};

Header.defaultProps = {
  user: {},
};

function mapDispatchToProps(dispatch) {
  return { logout: () => dispatch(logout()), }
}

function mapStateToProps(state) {
  return { user: state.toJS().user };
}

const ConnectedHeader = connect(mapStateToProps, mapDispatchToProps)(Header);

export default { Header as default, ConnectedHeader };
