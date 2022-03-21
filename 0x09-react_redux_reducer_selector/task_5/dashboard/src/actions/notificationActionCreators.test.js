import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from './notificationActionTypes';
import { markAsRead, setNotificationFilter } from './notificationActionCreators';

describe('notification actions', () => {
  it('verifies calling markAsRead with 1 has correct output', () => {
    expect(markAsRead(1)).toEqual({ type: MARK_AS_READ, index: 1 });
  });

  it('verifies calling setNotificationFilter with default has correct output', () => {
    expect(setNotificationFilter(NotificationTypeFilters.DEFAULT)).toEqual(
      {
	type: SET_TYPE_FILTER,
	filter: "DEFAULT"
      }
    );
  });
});
