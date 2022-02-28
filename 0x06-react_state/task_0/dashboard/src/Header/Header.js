import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/holberton-logo.jpg';

function Header() {
  return (
    <div className={css(styles.headerStyle)} data-id="app-header">
      <img src={logo} className={css(styles.headerImgStyle)} alt="logo" />
      <h1 className={css(styles.headerH1Style)}>School dashboard</h1>
    </div>
  );
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
});

export default Header;
