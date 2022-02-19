import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme';

describe('Header component rendering', () => {
  it('renders Header without crashing', () => {
    shallow(<Header />);
  });

  it('renders img  and h1 tags', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('div.App-header img.App-logo')).toHaveLength(1);
    expect(wrapper.find('div.App-header h1')).toHaveLength(1);
  });
});
