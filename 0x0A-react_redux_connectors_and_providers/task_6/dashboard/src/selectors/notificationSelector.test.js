import { filterTypeSelected, getNotifications, getUnreadNotifications, } from './notificationSelector';
import { initialState } from '../reducers/notificationReducer';
import { NotificationTypeFilters } from '../actions/notificationActionTypes';
import { notificationsNormalizer } from '../schema/notifications';
import { Map } from 'immutable';

const testNotificationState = {
  filter: "DEFAULT",
  notifications: [
    {
      id: 1,
      isRead: false,
      type: "default",
      value: "New course available",
    },
    {
      id: 2,
      isRead: true,
      type: "urgent",
      value: "New resume available",
    },
    {
      id: 3,
      isRead: false,
      type: "urgent",
      value: "New data available",
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
      isRead: false,
      type: "default",
      value: "New course available",
    },
    {
      id: 3,
      isRead: false,
      type: "urgent",
      value: "New data available",
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
    expect(res.toJS()).toEqual(
      normalizedTestNotificationState.notifications.entities.notifications
    );
  });

  it('verifies list of unread message entities within reducer returned', () => {
    const res = getUnreadNotifications(Map(normalizedTestNotificationState));
    expect(res.toJS()).toEqual(
      normalizedFilteredNotificationState.notifications.entities.notifications
    );
  });
});
