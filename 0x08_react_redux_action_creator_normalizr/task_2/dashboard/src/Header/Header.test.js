/**
 * @jest-environment jsdom
 */
import React from 'react';
import Header from './Header';
import { shallow, mount } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import { AppContext } from '../App/AppContext';

StyleSheetTestUtils.suppressStyleInjection();

describe('Header component rendering', () => {
  it('renders Header without crashing', () => {
    shallow(<AppContext.Provider><Header /></AppContext.Provider>);
  });

  it('renders img and h1 tags', () => {
    const wrapper = mount(<Header />);
    expect(wrapper.find('div[data-id="app-header"] img')).toHaveLength(1);
    expect(wrapper.find('div[data-id="app-header"] h1')).toHaveLength(1);
  });
});

describe('Header context', () => {
  it('verifies logoutSection not created with default context', () => {
    const value = { user: { email: '', password: '', isLoggedIn: false }, logOut: () => {} };
    const wrapper = mount(<AppContext.Provider value={value}><Header /></AppContext.Provider>);
    expect(wrapper.find('#logoutSection')).toHaveLength(0);
  });

  it('verifies logoutSection is created when user is defined in context', () => {
    const value = { user: { email:'email@email.com', password: 'password', isLoggedIn: true }, logOut: () => {} };
    const wrapper = mount(<AppContext.Provider value={value}><Header /></AppContext.Provider>);
    expect(wrapper.find('#logoutSection')).toHaveLength(1);
  });

  it('verifies logOut function called when logOut link clicked', () => {
    const value = { user: { email:'email@email.com', password: 'password', isLoggedIn: true }, logOut: () => {} };
    const logOutSpy = jest.spyOn(value, 'logOut');
    const wrapper = mount(<AppContext.Provider value={value}><Header /></AppContext.Provider>);
    wrapper.find('#logoutSection a').simulate('click');
    expect(logOutSpy).toHaveBeenCalled();
    logOutSpy.mockRestore();
  });
});
