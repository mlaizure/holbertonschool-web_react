import React from 'react';
import CourseListRow from './CourseListRow';
import { shallow } from 'enzyme';

describe('rendering CourseListRow component', () => {
  it('tests component with isHeader true and null textSecondCell', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell='first' />);
    expect(wrapper.find('tr').children()).toHaveLength(1);
    expect(wrapper.find('tr').childAt(0).html()).toEqual('<th colSpan="2">first</th>');
  });

  it('tests component with isHeader true and textSecondCell exists', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell='first' textSecondCell='second' />);
    expect(wrapper.find('tr').children()).toHaveLength(2);
    expect(wrapper.find('tr').childAt(0).html()).toEqual('<th>first</th>');
    expect(wrapper.find('tr').childAt(1).html()).toEqual('<th>second</th>');
  });

  it('tests component with isHeader false', () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell='first' textSecondCell='second' />);
    expect(wrapper.find('tr').children()).toHaveLength(2);
    expect(wrapper.find('tr').childAt(0).html()).toEqual('<td>first</td>');
    expect(wrapper.find('tr').childAt(1).html()).toEqual('<td>second</td>');
  });
});
