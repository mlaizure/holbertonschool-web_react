import React from 'react';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';
import { shallow } from 'enzyme';

describe('rendering CourseList component', () => {
  it('renders CourseList component without crashing', () => {
    shallow(<CourseList />);
  });

  it('renders 5 specified rows', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find(CourseListRow)).toHaveLength(5);
    expect(wrapper.find('thead').children()).toHaveLength(2);
    expect(wrapper.find('tbody').children()).toHaveLength(3);

    wrapper.find('thead').forEach(node => {
      expect(node.equals(<CourseListRow textFirstCell="Unused" />));
    });
    wrapper.find('tbody').forEach(node => {
      expect(node.equals(<CourseListRow textFirstCell="Unused" />));
    });
  });
});
