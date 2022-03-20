import { uiReducer, initialState } from './uiReducer';
import { selectCourse } from '../actions/courseActionCreators';
import { displayNotificationDrawer } from '../actions/uiActionCreators';

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
});
