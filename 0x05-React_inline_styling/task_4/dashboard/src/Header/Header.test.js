import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

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
