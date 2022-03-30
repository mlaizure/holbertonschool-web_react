import { Map } from 'immutable';
import { createSelector } from 'reselect';
import { NotificationTypeFilters } from '../actions/notificationActionTypes';

function filterTypeSelected(state) {
  return state.get('filter');
}

function getNotifications(state) {
  const messages = state.getIn(['notifications', 'entities', 'messages']) || [ ]
  return Object.values(messages)
}

const getUnreadNotificationsByType = createSelector(
  filterTypeSelected,
  getNotifications,
  (filter, notifications) => notifications.filter(
    (notification) => {
      if (filter === NotificationTypeFilters.DEFAULT)
	return !notification.isRead;
      else if (filter === NotificationTypeFilters.URGENT)
	return !notification.isRead && notification.type === 'urgent';
    }
  )
);

export { filterTypeSelected, getNotifications, getUnreadNotificationsByType };
