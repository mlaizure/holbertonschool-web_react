import React, { createContext } from 'react';

export const defaultUser = {
  email: '',
  password: '',
  isLoggedIn: false,
};

export const defaultLogOut = () => {};

export const AppContext = createContext({
  user: defaultUser,
  logOut: defaultLogOut,
});
