import { uiReducer, initialState } from './uiReducer';
import { SELECT_COURSE } from '../actions/courseActionTypes';
import { DISPLAY_NOTIFICATION_DRAWER } from '../actions/uiActionTypes';

describe('uiReducer', () => {
  it('verifies the state returned is initial state when no action is passed', () => {
    const res = uiReducer(initialState, 'no_action');
    expect(res).toEqual(initialState);
  });

  it('verifies state returned is initial state when SELECT_COURSE is passed', () => {
    const res = uiReducer(initialState, SELECT_COURSE);
    expect(res).toEqual(initialState);
  });

  it('verifies state returned is correctly changed when DISPLAY_NOTIFICATION_DRAWER is passed', () => {
    const res = uiReducer(initialState, DISPLAY_NOTIFICATION_DRAWER);
    expect(res.isNotificationDrawerVisible).toEqual(true);
  });
});
