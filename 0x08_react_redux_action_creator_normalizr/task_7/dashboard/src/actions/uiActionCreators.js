import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';

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

export { login, logout, displayNotificationDrawer, hideNotificationDrawer };
