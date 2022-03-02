/**
 * @jest-environment jsdom
 */
import React from 'react';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login, { LoginWithLogging } from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import { shallow, mount } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

const loggedInUser = { email: 'email@email.com', password: 'password', isLoggedIn: true };

describe('component rendering when isLoggedIn is false', () => {
  it('renders App without crashing', () => {
    shallow(<App />);
  });

  it('contains Notifications component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Notifications)).toHaveLength(1);
  });

  it('contains Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header)).toHaveLength(1);
  });

  it('contains Login component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(LoginWithLogging)).toHaveLength(1);
  });

  it('contains Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Footer)).toHaveLength(1);
  });

  it('ckecks that CourseList is not displayed', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(CourseList).exists()).toEqual(false);
  });
});

describe('component rendering when isLoggedIn is true', () => {
  it('verifies that Login component is not included', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ user: loggedInUser });
    expect(wrapper.find(LoginWithLogging).exists()).toEqual(false);
  });

  it('verifies that CourseList component is included', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ user: loggedInUser });
    expect(wrapper.find(CourseList).exists()).toEqual(true);
  });
});

describe('log out by pressing ctrl+h', () => {
  it('verifies logout message and state when ctrl+h are pressed', () => {
    let events = {};
    window.addEventListener = jest.fn((event, cb) => {
      events[event] = cb;
    });
    window.alert = jest.fn();

    const wrapper = mount(<App />);
    events.keydown({ ctrlKey: true, key: 'h' });
    expect(window.alert).toBeCalledWith('Logging you out');
    expect(wrapper.state().user.email).toEqual('');
    expect(wrapper.state().user.password).toEqual('');
    expect(wrapper.state().user.isLoggedIn).toEqual(false);
  });
});

describe('displayDrawer state', () => {
  it('verifies default state for displayDrawer is false and turns true after calling handleDisplayDrawer', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).toEqual(false);

    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state().displayDrawer).toEqual(true);
  });
});

describe('logIn and logOut functionality', () => {
  it('verifies the logIn function updates the state correctly', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().logIn(loggedInUser.email, loggedInUser.password);
    expect(wrapper.state().user.email).toEqual('email@email.com');
    expect(wrapper.state().user.password).toEqual('password');
    expect(wrapper.state().user.isLoggedIn).toEqual(true);
  });

  it('verifies the logOut function updates the state correctly', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ user: loggedInUser });
    wrapper.state().logOut();
    expect(wrapper.state().user.email).toEqual('');
    expect(wrapper.state().user.password).toEqual('');
    expect(wrapper.state().user.isLoggedIn).toEqual(false);
  });
});
