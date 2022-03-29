import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters, SET_LOADING_STATE, FETCH_NOTIFICATIONS_SUCCESS } from './notificationActionTypes';
import { markAsRead, setNotificationFilter, setLoadingState, setNotifications, fetchNotifications } from './notificationActionCreators';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { initialState } from '../reducers/notificationReducer.js';

jest.mock('node-fetch', () => require('fetch-mock').sandbox());
const fetchMock = require('node-fetch');

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('notification actions', () => {
  it('verifies calling markAsRead with 1 has correct output', () => {
    expect(markAsRead(1)).toEqual({ type: MARK_AS_READ, index: 1 });
  });

  it('verifies calling setNotificationFilter with default has correct output', () => {
    expect(setNotificationFilter(NotificationTypeFilters.DEFAULT)).toEqual(
      {
	type: SET_TYPE_FILTER,
	filter: "DEFAULT"
      }
    );
  });

  it('verifies setLoadingState creates right action', () => {
    expect(setLoadingState(false)).toEqual({ type: SET_LOADING_STATE, loading: false });
  });

  it('verifies setNotifications creates right action', () => {
    expect(setNotifications([])).toEqual({ type: FETCH_NOTIFICATIONS_SUCCESS, notifications: [] });
  });

  it('verifies fetchNotifications creates right action', () => {
    const store = mockStore({});
    fetchMock.get('/notifications.json', ['test'])
    return store.dispatch(fetchNotifications())
      .then(() => {
	const actions = store.getActions();
	expect(actions[0]).toEqual(setLoadingState(true));
	expect(actions[1]).toEqual(setNotifications(['test']));
	expect(actions[2]).toEqual(setLoadingState(false));
      })
      .then(() => fetchMock.restore());
  });
});
