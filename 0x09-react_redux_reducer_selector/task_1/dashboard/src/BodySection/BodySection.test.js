import React from 'react';
import BodySection from './BodySection';
import { shallow } from 'enzyme';

describe('component rendering for BodySection', () => {
  it('verifies h2 element and child render', () => {
    const wrapper = shallow(
      <BodySection title="test title">
	<p>test children node</p>
      </BodySection>
    );
    expect(wrapper.find('h2')).toHaveLength(1);
    expect(wrapper.find('h2').text()).toEqual('test title');
    expect(wrapper.find('p')).toHaveLength(1);
    expect(wrapper.find('p').text()).toEqual('test children node');
  });
});
