import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters,
	 FETCH_NOTIFICATIONS_SUCCESS, } from '../actions/notificationActionTypes';

const defaultState = {
  notifications: [],
  filter: NotificationTypeFilters.DEFAULT,
};

function notificationReducer(state=defaultState, action) {
  if (action.type === FETCH_NOTIFICATIONS_SUCCESS) {
    const updatedNotifications = action.data.map((notification) => ({
      ...notification,
      isRead: false,
    }));
    return { ...state, notifications: updatedNotifications };
  }

  else if (action.type === MARK_AS_READ) {
    const updatedNotifications =  state.notifications.map((notification) => {
      if (notification.id === action.index)
	return { ...notification, isRead: true, };
      else return notification;
    });
    return { ...state, notifications: updatedNotifications };
  }

  else if (action.type === SET_TYPE_FILTER)
    return { ...state, filter: action.filter };

  else return state;
}

export { notificationReducer, defaultState };
