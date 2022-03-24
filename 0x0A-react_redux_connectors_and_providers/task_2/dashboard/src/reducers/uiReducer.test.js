import { uiReducer, initialState } from './uiReducer';
import { selectCourse } from '../actions/courseActionCreators';
import { login, logout, displayNotificationDrawer } from '../actions/uiActionCreators';

describe('uiReducer', () => {
  it('verifies the state returned is initial state when no action is passed', () => {
    const res = uiReducer(initialState, 'no_action');
    expect(res.toJS()).toEqual(initialState.toJS());
  });

  it('verifies state returned is initial state when selectCourse is passed', () => {
    const res = uiReducer(initialState, selectCourse());
    expect(res.toJS()).toEqual(initialState.toJS());
  });

  it('verifies state returned is correctly changed when displayNotificationDrawer is passed', () => {
    const res = uiReducer(initialState, displayNotificationDrawer());
    expect(res.get('isNotificationDrawerVisible')).toEqual(true);
  });

  it('verifies state returned is correctly changed when login is passed', () => {
    const user = { email:'email@email.com', password: 'password' };
    const res = uiReducer(initialState, login(user.email, user.password));
    expect(res.get("user")).toEqual(user);
    expect(res.get("isUserLoggedIn")).toEqual(true);
  });

  it('verifies state returned is correctly changed when logout is passed', () => {
    const res = uiReducer(initialState, logout());
    expect(res.get("user")).toEqual(null);
    expect(res.get("isUserLoggedIn")).toEqual(false);
  });
});
