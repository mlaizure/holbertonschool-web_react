/**
 * @jest-environment jsdom
 */
import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import { AppContext } from '../App/AppContext';

StyleSheetTestUtils.suppressStyleInjection();

const user = {
  email: 'email@email.com',
  password: 'password'
};

describe('Header component rendering', () => {
  it('renders Header without crashing', () => {
    shallow(<Header />);
  });

  it('renders img and h1 tags', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('div[data-id="app-header"] img')).toHaveLength(1);
    expect(wrapper.find('div[data-id="app-header"] h1')).toHaveLength(1);
  });
});

describe('Header context', () => {
  it('verifies logoutSection not created with default context', () => {
    const wrapper = shallow(<Header isLoggedIn={false} user={user}/>);
    expect(wrapper.find('#logoutSection')).toHaveLength(0);
  });

  it('verifies logoutSection is created when user is defined in context', () => {
    const wrapper = shallow(<Header isLoggedIn={true} user={user} />);
    expect(wrapper.find('#logoutSection')).toHaveLength(1);
  });

  it('verifies logOut function called when logOut link clicked', () => {
    const logout = jest.fn();
    const wrapper = shallow(<Header logout={logout} isLoggedIn={true} user={user} />);
    wrapper.find('#logoutSection a').simulate('click');
    expect(logout).toHaveBeenCalled();
  });
});
