import React from 'react';
import Footer from './Footer';
import { shallow } from 'enzyme';

describe('Footer component rendering', () => {
    it('renders Footer without crashing', () => {
    shallow(<Footer />);
  });

  it('renders text "Copyright"', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('div.App-footer p').text()).toContain('Copyright');
  });
});
