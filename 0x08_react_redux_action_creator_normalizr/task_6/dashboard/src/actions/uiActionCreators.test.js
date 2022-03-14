import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';
import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from './uiActionCreators';

describe('UI actions', () => {
  it('verifies calling login gives correct output', () => {
    expect(login('email@test.com', 'testpassword')).toEqual(
      { type: LOGIN, user: { email: 'email@test.com', password: 'testpassword' } }
    );
  });

  it('verifies calling logout gives correct output', () => {
    expect(logout()).toEqual({ type: LOGOUT });
  });

  it('verifies calling displayNotificationDrawer gives correct output', () => {
    expect(displayNotificationDrawer()).toEqual({ type: DISPLAY_NOTIFICATION_DRAWER });
  });

  it('verifies calling hideNotificationDrawer gives correct output', () => {
    expect(hideNotificationDrawer()).toEqual({ type: HIDE_NOTIFICATION_DRAWER });
  });
});
