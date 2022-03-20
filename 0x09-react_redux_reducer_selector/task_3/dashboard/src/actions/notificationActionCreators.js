import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';

function dispatch(arg) {
  return arg;
}

function markAsRead(index) {
  return dispatch({ type: MARK_AS_READ, index });
}

function setNotificationFilter(filter) {
  return dispatch({ type: SET_TYPE_FILTER, filter });
}

export { markAsRead, setNotificationFilter };
