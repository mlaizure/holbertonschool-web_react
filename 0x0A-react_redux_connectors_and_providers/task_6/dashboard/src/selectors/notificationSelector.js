import { Map } from 'immutable';

function filterTypeSelected(state) {
  return state.get('filter');
}

function getNotifications(state) {
  const messages = state.getIn(['notifications', 'entities', 'messages']) || [ ]
  return Object.values(messages)
}

function getUnreadNotifications(state) {
  const messages = getNotifications(state);
  const unreadMessages = messages.filter(
    message => message.isRead === false
  );
  console.log({ unreadMessages })
  return unreadMessages;
}

export { filterTypeSelected, getNotifications, getUnreadNotifications };
