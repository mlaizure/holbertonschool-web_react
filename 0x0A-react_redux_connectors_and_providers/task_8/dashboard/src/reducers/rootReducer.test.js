import rootReducer from './rootReducer';
import { createStore } from 'redux';
import { Map } from 'immutable';

describe('rootReducer', () => {
  it('verifies initial state for rootReducer', () => {
    const store = createStore(rootReducer);
    expect(store.getState()).toEqual({
      courses: Map(),
      notifications: Map({
	notifications: { },
	filter: 'DEFAULT',
	loading: false,
      }),
      ui: Map({
	isNotificationDrawerVisible: false,
	isUserLoggedIn: false,
	user: {},
      }),
    });
  });
});
