import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('component rendering', () => {
  it('renders App without crashing', () => {
    shallow(<App />);
  });

  it('verifies App renders with a div with class "App-header"', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div.App-header')).not.toEqual(null);
  });

  it('verifies App renders with a div with class "App-body"', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div.App-body')).not.toEqual(null);
  });

  it('verifies App renders with a div with class "App-footer"', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div.App-footer')).not.toEqual(null);
  });
});
