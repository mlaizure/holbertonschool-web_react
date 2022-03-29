import { filterTypeSelected, getNotifications, getUnreadNotifications, } from './notificationSelector';
import { initialState } from '../reducers/notificationReducer';
import { NotificationTypeFilters } from '../actions/notificationActionTypes';
import { notificationsNormalizer } from '../schema/notifications';
import { Map } from 'immutable';

const testNotificationState = {
  filter: "DEFAULT",
  notifications: [
    {
      type: "default",
      context: {
        guid: "1",
        isRead: false,
        value: "New course available"
      }
    },
    {
      type: "urgent",
      context: {
        guid: "2",
        isRead: true,
        value: "New resume available",
      }
    },
    {
      type: "urgent",
      context: {
        guid: "3",
        isRead: false,
        value: "New data available",
      }
    },
  ],
};

const normalizedTestNotificationState = {
  ...testNotificationState,
  notifications: notificationsNormalizer(testNotificationState.notifications),
};

const filteredNotificationState = {
  filter: "DEFAULT",
  notifications: [
    {
      id: 1,
      type: "default",
      context: {
        guid: "1",
        isRead: false,
        value: "New course available",
      }
    },
    {
      id: 3,
      type: "urgent",
      context: {
        guid: "3",
        isRead: false,
        value: "New data available",
      }
    },
  ],
};

const normalizedFilteredNotificationState = {
  ...filteredNotificationState,
  notifications: notificationsNormalizer(filteredNotificationState.notifications),
};

describe('notifications selectors', () => {
  it('verifies filter type returned from state', () => {
    const res = filterTypeSelected(initialState);
    expect(res).toEqual(NotificationTypeFilters.DEFAULT);
  });

  it('verifies list of message entities within reducer returned', () => {
    const res = getNotifications(Map(normalizedTestNotificationState));
    expect(res).toEqual(
      Object.values(normalizedTestNotificationState.notifications.entities.messages)
    );
  });

  it('verifies list of unread message entities within reducer returned', () => {
    console.log({ normalizedTestNotificationState: normalizedTestNotificationState.notifications.entities.messages })
    const res = getUnreadNotifications(Map(normalizedTestNotificationState));
    console.log(normalizedFilteredNotificationState)
    expect(res).toEqual(
      Object.values(normalizedFilteredNotificationState.notifications.entities.messages)
    );
  });
});
