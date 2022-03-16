import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER,
	 LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';
import { login, logout, displayNotificationDrawer, hideNotificationDrawer,
	 loginSuccess, loginFailure, loginRequest } from './uiActionCreators';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

jest.mock('node-fetch', () => require('fetch-mock').sandbox());
const fetchMock = require('node-fetch');

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('UI actions', () => {
  it('verifies calling login gives correct output', () => {
    expect(login('email@test.com', 'testpassword')).toEqual(
      { type: LOGIN, user: { email: 'email@test.com', password: 'testpassword' } }
    );
  });

  it('verifies calling logout gives correct output', () => {
    expect(logout()).toEqual({ type: LOGOUT });
  });

  it('verifies calling displayNotificationDrawer gives correct output', () => {
    expect(displayNotificationDrawer()).toEqual({ type: DISPLAY_NOTIFICATION_DRAWER });
  });

  it('verifies calling hideNotificationDrawer gives correct output', () => {
    expect(hideNotificationDrawer()).toEqual({ type: HIDE_NOTIFICATION_DRAWER });
  });
});

describe('loginRequest', () => {
  it('verifies that if API returns right response, store received LOGIN and LOGIN_SUCCESS', () => {
    const store = mockStore({});
    fetchMock.get('/login-success.json', 200)
    return store.dispatch(loginRequest('email@test.com', 'testpassword'))
      .then(() => {
	const actions = store.getActions();
	expect(actions[0]).toEqual(login('email@test.com', 'testpassword'));
	expect(actions[1]).toEqual(loginSuccess());
      })
      .then(() => fetchMock.restore());
  });

  it('verifies that if API query fails, store received LOGIN and LOGIN_FAILURE', () => {
    const store = mockStore({});
    fetchMock.get('/login-success.json', () => { throw new Error("Hard fail") })
    return store.dispatch(loginRequest('email@test.com', 'testpassword'))
      .then(() => {
	const actions = store.getActions();
	expect(actions[0]).toEqual(login('email@test.com', 'testpassword'));
	expect(actions[1]).toEqual(loginFailure());
      })
      .then(() => fetchMock.restore());
  });
});
