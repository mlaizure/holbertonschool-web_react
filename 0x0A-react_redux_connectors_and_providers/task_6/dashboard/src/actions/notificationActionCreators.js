import {
  MARK_AS_READ, SET_TYPE_FILTER,
  FETCH_NOTIFICATIONS_SUCCESS, SET_LOADING_STATE,
} from './notificationActionTypes';
import fetch from "node-fetch";

function markAsRead(index) {
  return { type: MARK_AS_READ, index };
}

function setNotificationFilter(filter) {
  return { type: SET_TYPE_FILTER, filter };
}

function fetchNotificationsSuccess(data) {
  return { type: FETCH_NOTIFICATIONS_SUCCESS, data };
}

function setLoadingState(loading) {
  return { type: SET_LOADING_STATE, loading };
}

function setNotifications(notifications) {
  return { type: FETCH_NOTIFICATIONS_SUCCESS, notifications };
}

function fetchNotifications() {
  return function(dispatch) {
    dispatch(setLoadingState(true));
    return fetch('/notifications.json')
      .then(response => response.json())
      .then(data => dispatch(setNotifications(data)))
      .catch(err => console.log(err))
      .then(() => dispatch(setLoadingState(false)));
  };
}

export { markAsRead, setNotificationFilter, fetchNotificationsSuccess,
	 setLoadingState, setNotifications, fetchNotifications, };
