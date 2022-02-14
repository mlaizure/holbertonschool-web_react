import React from 'react';
import Login from './Login';
import { shallow } from 'enzyme';

describe('Login component rendering', () => {
    it('renders Login without crashing', () => {
    shallow(<Login />);
  });

  it('renders 2 input tags and 2 label tags', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('div.App-body input')).toHaveLength(2);
    expect(wrapper.find('div.App-body label')).toHaveLength(2);
  });
});
