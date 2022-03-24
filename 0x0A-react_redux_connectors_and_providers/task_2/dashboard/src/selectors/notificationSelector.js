import { Map } from 'immutable';

function filterTypeSelected(state) {
  return state.get('filter');
}

function getNotifications(state) {
  return Map(state.getIn(['notifications', 'entities', 'notifications']));
}

function getUnreadNotifications(state) {
  const notifications = getNotifications(state);
  const unreadNotifications = notifications.filter(
    notification => notification.isRead === false
  );
  return unreadNotifications;
}

export { filterTypeSelected, getNotifications, getUnreadNotifications };
