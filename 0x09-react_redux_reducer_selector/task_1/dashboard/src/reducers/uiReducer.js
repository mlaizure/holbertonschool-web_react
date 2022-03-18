import { LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER,
	 LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/uiActionTypes';
import { Map } from 'immutable';

const initialState = Map({
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {},
});

function uiReducer(state = initialState, action) {
  if (action.type === DISPLAY_NOTIFICATION_DRAWER)
    return state.set('isNotificationDrawerVisible', true);
  else if (action.type === HIDE_NOTIFICATION_DRAWER)
    return state.set('isNotificationDrawerVisible', false);
  else if (action.type === LOGIN_SUCCESS)
    return state.set('isUserLoggedIn', true);
  else if (action.type === LOGIN_FAILURE)
    return state.set('isUserLoggedIn', false);
  else if (action.type === LOGOUT)
    return state.set('isUserLoggedIn', false);
  else
    return state;
}

export { uiReducer, initialState };
