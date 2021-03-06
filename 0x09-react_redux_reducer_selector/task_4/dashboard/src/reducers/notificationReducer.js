import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters,
	 FETCH_NOTIFICATIONS_SUCCESS, } from '../actions/notificationActionTypes';
import { notificationsNormalizer } from '../schema/notifications';
import { Map } from 'immutable';

const initialState = Map({
  notifications: [],
  filter: NotificationTypeFilters.DEFAULT,
});

function notificationReducer(state=initialState, action) {
  if (action.type === FETCH_NOTIFICATIONS_SUCCESS) {
    const updatedNotifications = action.data.map((notification) => ({
      ...notification,
      isRead: false,
    }));
    const normalizedNotifications = notificationsNormalizer(updatedNotifications);
    return state.merge({
      notifications: normalizedNotifications,
    });
  }

  else if (action.type === MARK_AS_READ)
    return state.setIn(
      [ 'notifications', 'entities', 'notifications',
	action.index.toString(), 'isRead', ],
      true
    );

  else if (action.type === SET_TYPE_FILTER)
    return state.set('filter', action.filter);

  else return state;
}

export { notificationReducer, initialState };
