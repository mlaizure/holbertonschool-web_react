import React from 'react';
import BodySection from './BodySection';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import { shallow } from 'enzyme';

describe('component rendering for BodySectionWithMarginBottom', () => {
  it('verifies BodySection render and props passed correctly', () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title="test title">
	<p>test children node</p>
      </BodySectionWithMarginBottom>
    );
    expect(wrapper.find(BodySection)).toHaveLength(1);
    expect(wrapper.find(BodySection).props().title).toEqual('test title');
    expect(wrapper.find(BodySection).props().children.type).toEqual('p');
    expect(wrapper.find(BodySection).props().children.props.children).toEqual('test children node');
  });
});
