import notifications from '../../../../notifications.json';
import { normalize, schema } from 'normalizr';

const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, {
  idAttribute: 'guid'
});
const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});
const normalizedNotifications = normalize(notifications, [notification]);

function getAllNotificationsByUser(userId) {
  const res = [];
  const notifications = normalizedNotifications.entities.notifications;
  const messages = normalizedNotifications.entities.messages;

  for (const id in notifications) {
    if (notifications[id].author === userId)
      res.push(messages[notifications[id].context]);
  }
  return res;
}

export { normalizedNotifications, getAllNotificationsByUser };
