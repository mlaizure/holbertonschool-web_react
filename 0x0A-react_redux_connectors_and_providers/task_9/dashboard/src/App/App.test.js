/**
 * @jest-environment jsdom
 */
import React from 'react';
import App from './App';
import { default as Notifications } from '../Notifications/NotificationsContainer';
import Header, { ConnectedHeader } from '../Header/Header';
import Login, { LoginWithLogging } from '../Login/Login';
import Footer, { ConnectedFooter } from '../Footer/Footer';
import { ConnectedCourseList as CourseList } from '../CourseList/CourseList';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import { mapStateToProps } from './App';
import { fromJS } from 'immutable';

StyleSheetTestUtils.suppressStyleInjection();

const loggedInUser = { email: 'email@email.com', password: 'password', isLoggedIn: true };

const exampleNotifications = [
  {id: 1, type: 'default', value: 'New course available'},
  {id: 2, type: 'urgent', value: 'New resume available'},
  {id: 3, type: 'urgent', value: 'This is urgent!'},
];

describe('component rendering when isLoggedIn is false', () => {
  it('renders App without crashing', () => {
    shallow(<App isLoggedIn={false} />);
  });

  it('contains Notifications component', () => {
    const wrapper = shallow(<App isLoggedIn={false} />);
    expect(wrapper.find(Notifications)).toHaveLength(1);
  });

  it('contains Header component', () => {
    const wrapper = shallow(<App isLoggedIn={false} />);
    expect(wrapper.find(ConnectedHeader)).toHaveLength(1);
  });

  it('contains Login component', () => {
    const wrapper = shallow(<App isLoggedIn={false} />);
    expect(wrapper.find(LoginWithLogging)).toHaveLength(1);
  });

  it('contains Footer component', () => {
    const wrapper = shallow(<App isLoggedIn={false} />);
    expect(wrapper.find(ConnectedFooter)).toHaveLength(1);
  });

  it('checks that CourseList is not displayed', () => {
    const wrapper = shallow(<App isLoggedIn={false} />);
    expect(wrapper.find(CourseList).exists()).toEqual(false);
  });
});

describe('component rendering when isLoggedIn is true', () => {
  it('verifies that Login component is not included', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find(LoginWithLogging).exists()).toEqual(false);
  });

  it('verifies that CourseList component is included', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find(CourseList).exists()).toEqual(true);
  });
});

describe('mapStateToProps', () => {
  it('verifies the function returns the right object when passing the state', () => {
    const res = mapStateToProps({ ui: fromJS({ isUserLoggedIn: true } ) });
    expect(res).toEqual({ isLoggedIn: true });
  });
});
