import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER,
	 LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';

import fetch from "node-fetch";

function login(email, password) {
  return { type: LOGIN, user: { email, password } };
}

function logout() {
  return { type: LOGOUT };
}

function displayNotificationDrawer() {
  return { type: DISPLAY_NOTIFICATION_DRAWER };
}

function hideNotificationDrawer() {
  return { type: HIDE_NOTIFICATION_DRAWER };
}

function loginSuccess(...args) {
  return { type: LOGIN_SUCCESS };
}

function loginFailure() {
  return { type: LOGIN_FAILURE };
}

function loginRequest(email, password) {
  return function(dispatch) {
    dispatch(login(email, password))
    return fetch('/login-success.json')
      .then(() => dispatch(loginSuccess()))
      .catch(() => dispatch(loginFailure()));
  }
}

export { login, logout, displayNotificationDrawer, hideNotificationDrawer,
	 loginSuccess, loginFailure, loginRequest };
