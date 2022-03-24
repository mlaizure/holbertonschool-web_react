import { fetchNotificationsSuccess, markAsRead, setNotificationFilter, } from '../actions/notificationActionCreators';
import { NotificationTypeFilters } from '../actions/notificationActionTypes';
import { notificationReducer, initialState } from './notificationReducer';
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

const normalizedTestNotificationState = {
  ...testNotificationState,
  notifications: notificationsNormalizer(testNotificationState.notifications),
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

const normalizedReadNotificationState = {
  ...readNotificationState,
  notifications: notificationsNormalizer(readNotificationState.notifications),
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

const normalizedUrgentFilterNotificationState = {
  ...urgentFilterNotificationState,
  notifications: notificationsNormalizer(urgentFilterNotificationState.notifications),
};

describe('notificationReducer', () => {
  it('verifies default state returns an empty list and default filter', () => {
    const res = notificationReducer(undefined, 'no_action');
    expect(res.toJS().notifications).toEqual(initialState.toJS().notifications);
    expect(res.toJS().filter).toEqual(NotificationTypeFilters.DEFAULT);
  });

  it('verifies fetchNotificationsSuccess returns data passed', () => {
    const res = notificationReducer(
      initialState,
      fetchNotificationsSuccess(testNotificationState.notifications)
    );
    expect(res.toJS()).toEqual(normalizedTestNotificationState);
    expect(res.toJS().filter).toEqual(NotificationTypeFilters.DEFAULT);
  });

  it('verifies markAsRead returns data with isRead as true', () => {
    const res = notificationReducer(Map(normalizedTestNotificationState), markAsRead(2));
    expect(res.toJS().notifications.entities.notifications["2"].isRead).toEqual(true);
  });

  it('verifies setNotificationFilter returns state with correct filter', () => {
    const res = notificationReducer(
      Map(normalizedTestNotificationState),
      setNotificationFilter(NotificationTypeFilters.URGENT)
    );
    expect(res.get("filter")).toEqual(NotificationTypeFilters.URGENT);
  });
});
