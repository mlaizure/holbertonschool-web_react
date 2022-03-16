import React from 'react';
import Login from './Login';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('Login component rendering', () => {
    it('renders Login without crashing', () => {
    shallow(<Login />);
  });

  it('renders 2 input tags and 2 label tags', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('div[data-id="app-login"] input')).toHaveLength(3);
    expect(wrapper.find('div[data-id="app-login"] label')).toHaveLength(2);
  });
});

describe('submit button functionality', () => {
  it('verifies submit button is disabled by default', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find({ type: 'submit' }).prop('disabled')).toEqual(true);
  });

  it('verifies submit button enabled after changing input values', () => {
    const wrapper = shallow(<Login />);
    const email = { target: {
      name: 'email',
      value: 'chell@aperturescience.com',
    }}
    const password = { target: {
      name: 'password',
      value: 'thecakeisalie',
    }}
    const empty = { target: {
      name: 'email',
      value: '',
    }}

    wrapper.find({ name: 'email' }).simulate('change', email);
    wrapper.find({ name: 'password' }).simulate('change', password);
    expect(wrapper.find({ type: 'submit' }).prop('disabled')).toEqual(false);
    wrapper.find({ name: 'email' }).simulate('change', empty);
    expect(wrapper.find({ type: 'submit' }).prop('disabled')).toEqual(true);
  });
});
