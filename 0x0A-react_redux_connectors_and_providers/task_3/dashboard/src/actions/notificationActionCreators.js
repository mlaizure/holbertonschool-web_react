import { MARK_AS_READ, SET_TYPE_FILTER,
	 FETCH_NOTIFICATIONS_SUCCESS } from './notificationActionTypes';

function dispatch(arg) {
  return arg;
}

function markAsRead(index) {
  return dispatch({ type: MARK_AS_READ, index });
}

function setNotificationFilter(filter) {
  return dispatch({ type: SET_TYPE_FILTER, filter });
}

function fetchNotificationsSuccess(data) {
  return dispatch({ type: FETCH_NOTIFICATIONS_SUCCESS, data });
}

export { markAsRead, setNotificationFilter, fetchNotificationsSuccess };
