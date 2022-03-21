import { fetchNotificationsSuccess, markAsRead, setNotificationFilter, } from '../actions/notificationActionCreators';
import { NotificationTypeFilters } from '../actions/notificationActionTypes';
import { notificationReducer, defaultState } from './notificationReducer';

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
      isRead: false,
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

const readNotificationState = {
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

const urgentFilterNotificationState = {
  filter: "URGENT",
  notifications: [
    {
      id: 1,
      isRead: false,
      type: "default",
      value: "New course available",
    },
    {
      id: 2,
      isRead: false,
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

describe('notificationReducer', () => {
  it('verifies default state returns an empty list and default filter', () => {
    const res = notificationReducer(undefined, 'no_action');
    expect(res.notifications).toEqual([]);
    expect(res.filter).toEqual(NotificationTypeFilters.DEFAULT);
  });

  it('verifies fetchNotificationsSuccess returns data passed', () => {
    const res = notificationReducer(
      defaultState,
      fetchNotificationsSuccess(testNotificationState.notifications)
    );
    expect(res.notifications).toEqual(testNotificationState.notifications);
    expect(res.filter).toEqual(NotificationTypeFilters.DEFAULT);
  });

  it('verifies markAsRead returns data with isRead as true', () => {
    const res = notificationReducer(testNotificationState, markAsRead(2));
    expect(res.notifications.find((notification) => notification.id === 2).isRead).toEqual(true);
  });

  it('verifies setNotificaitonFilter returns state with correct filter', () => {
    const res = notificationReducer(
      testNotificationState,
      setNotificationFilter(NotificationTypeFilters.URGENT)
    );
    expect(res.filter).toEqual(NotificationTypeFilters.URGENT);
    expect(res.notifications).toEqual(testNotificationState.notifications);
  });
});
