/**
 * @jest-environment jsdom
 */
import React from 'react';
import Footer from './Footer';
import { shallow, mount } from 'enzyme';
import { AppContext } from '../App/AppContext';

describe('Footer component rendering', () => {
    it('renders Footer without crashing', () => {
    shallow(<Footer />);
  });

  it('renders text "Copyright"', () => {
    const wrapper = mount(<Footer />);
    expect(wrapper.find('div[data-id="app-footer"] p').first().text()).toContain('Copyright');
  });
});

describe('contact us link behavior', () => {
  it('verifies the link is not displayed when the user is logged out within the context', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('p[data-id="contact-us"]')).toHaveLength(0);
  });

  it('verifies the link is displayed when the user is logged in within the context', () => {
    const value = { user: { email:'email@email.com', password: 'password', isLoggedIn: true }, logOut: () => {} };
    const wrapper = mount(<AppContext.Provider value={value}><Footer /></AppContext.Provider>);
    expect(wrapper.find('p[data-id="contact-us"]')).toHaveLength(1);
  });
});
