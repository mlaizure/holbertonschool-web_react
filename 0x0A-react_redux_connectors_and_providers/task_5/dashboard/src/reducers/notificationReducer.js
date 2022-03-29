import {
  MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters,
  FETCH_NOTIFICATIONS_SUCCESS, SET_LOADING_STATE,
} from '../actions/notificationActionTypes';
import { notificationsNormalizer } from '../schema/notifications';
import { Map } from 'immutable';

const initialState = Map({
  notifications: { },
  filter: NotificationTypeFilters.DEFAULT,
  loading: false,
});

function notificationReducer(state=initialState, action) {
  if (action.type === FETCH_NOTIFICATIONS_SUCCESS) {
    console.log({ action })
    const updatedNotifications = action.notifications.map((notification) => ({
      ...notification,
      isRead: false,
    }));
    const normalizedNotifications = notificationsNormalizer(updatedNotifications);
    return state.mergeDeep({
      notifications: normalizedNotifications,
    });
  }

  else if (action.type === MARK_AS_READ) {
    const updatedState = state.setIn(
      [ 'notifications', 'entities', 'messages', action.guid, 'isRead' ],
      true
    );
    return updatedState
  }

  else if (action.type === SET_TYPE_FILTER)
    return state.set('filter', action.filter);

  else if (action.type === SET_LOADING_STATE) {
    console.log(action.loading);
    return state.set('loading', action.loading);
  }

  else return state;
}

export { notificationReducer, initialState };
