import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER,
	 LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';

import fetch from "node-fetch";

function dispatch(arg) {
  return arg;
}

function login(email, password) {
  return dispatch({ type: LOGIN, user: { email, password } });
}

function logout() {
  return dispatch({ type: LOGOUT });
}

function displayNotificationDrawer() {
  return dispatch({ type: DISPLAY_NOTIFICATION_DRAWER });
}

function hideNotificationDrawer() {
  return dispatch({ type: HIDE_NOTIFICATION_DRAWER });
}

function loginSuccess(...args) {
  return dispatch({ type: LOGIN_SUCCESS });
}

function loginFailure() {
  return dispatch({ type: LOGIN_FAILURE });
}

function loginRequest(email, password) {
  return function(disp) {
    dispatch = disp;
    login(email, password);
    return fetch('/login-success.json')
      .then(loginSuccess)
      .catch(loginFailure);
  }
}

export { login, logout, displayNotificationDrawer, hideNotificationDrawer,
	 loginSuccess, loginFailure, loginRequest };
