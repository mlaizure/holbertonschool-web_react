import React from 'react';
import CourseListRow from './CourseListRow';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('rendering CourseListRow component', () => {
  it('tests component with isHeader true and null textSecondCell', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell='first' />);
    expect(wrapper.find('tr').children()).toHaveLength(1);
    expect(wrapper.props().children.props.colSpan).toEqual('2');
  });

  it('tests component with isHeader true and textSecondCell exists', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell='first' textSecondCell='second' />);
    expect(wrapper.find('tr').children()).toHaveLength(2);
    expect(wrapper.find('tr').childAt(0).name()).toEqual('th');
    expect(wrapper.find('tr').childAt(0).text()).toEqual('first');
    expect(wrapper.find('tr').childAt(1).name()).toEqual('th');
    expect(wrapper.find('tr').childAt(1).text()).toEqual('second');
  });

  it('tests component with isHeader false', () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell='first' textSecondCell='second' />);
    expect(wrapper.find('tr').children()).toHaveLength(2);
    expect(wrapper.find('tr').childAt(0).name()).toEqual('td');
    expect(wrapper.find('tr').childAt(0).text()).toEqual(' first');
    expect(wrapper.find('tr').childAt(1).html()).toEqual('<td>second</td>');
  });
});
