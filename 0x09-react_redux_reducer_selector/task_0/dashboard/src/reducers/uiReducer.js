import { LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER,
	 LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/uiActionTypes';

const initialState = {
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {},
};

function uiReducer(state = initialState, action) {
  if (action.type === DISPLAY_NOTIFICATION_DRAWER)
    return { ...state, isNotificationDrawerVisible: true, }
  else if (action.type === HIDE_NOTIFICATION_DRAWER)
    return { ...state, isNotificationDrawerVisible: false, }
  else if (action.type === LOGIN_SUCCESS)
    return { ...state, isUserLoggedIn: true, }
  else if (action.type === LOGIN_FAILURE)
    return { ...state, isUserLoggedIn: false, }
  else if (action.type === LOGOUT)
    return { ...state, isUserLoggedIn: false, }
  else
    return state;
}

export { uiReducer, initialState };
