import React from 'react';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

const listCourses = [
  {id: 1, name: 'ES6', credit: 60},
  {id: 2, name: 'Webpack', credit: 20},
  {id: 3, name: 'React', credit: 40},
];

describe('rendering CourseList component', () => {
  it('renders CourseList component without crashing', () => {
    shallow(<CourseList />);
  });

  // tests from task 5 of props project
  it('verifies CourseList renders if no listCourses', () => {
    const wrapper = shallow(<CourseList listCourses={[]} />);
    expect(wrapper.find(CourseListRow)).toHaveLength(3);
    expect(wrapper.find('thead').children()).toHaveLength(2);
    expect(wrapper.find('tbody').children()).toHaveLength(1);

    expect(wrapper.find(CourseListRow).get(0).props.isHeader).toEqual(true);
    expect(wrapper.find(CourseListRow).get(0).props.textFirstCell).toEqual('Available courses');
    expect(wrapper.find(CourseListRow).get(1).props.isHeader).toEqual(true);
    expect(wrapper.find(CourseListRow).get(1).props.textFirstCell).toEqual('Course name');
    expect(wrapper.find(CourseListRow).get(1).props.textSecondCell).toEqual('Credit');
    expect(wrapper.find(CourseListRow).get(2).props.isHeader).toEqual(false);
    expect(wrapper.find(CourseListRow).get(2).props.textFirstCell).toEqual('No course available yet');

    const wrapper1 = shallow(<CourseList />);
    expect(wrapper1.find(CourseListRow)).toHaveLength(3);
    expect(wrapper1.find('thead').children()).toHaveLength(2);
    expect(wrapper1.find('tbody').children()).toHaveLength(1);

    expect(wrapper1.find(CourseListRow).get(0).props.isHeader).toEqual(true);
    expect(wrapper1.find(CourseListRow).get(0).props.textFirstCell).toEqual('Available courses');
    expect(wrapper1.find(CourseListRow).get(1).props.isHeader).toEqual(true);
    expect(wrapper1.find(CourseListRow).get(1).props.textFirstCell).toEqual('Course name');
    expect(wrapper1.find(CourseListRow).get(1).props.textSecondCell).toEqual('Credit');
    expect(wrapper1.find(CourseListRow).get(2).props.isHeader).toEqual(false);
    expect(wrapper1.find(CourseListRow).get(2).props.textFirstCell).toEqual('No course available yet');
  });

  it('verifies list of courses renders correctly', () => {
    const wrapper = shallow(<CourseList listCourses={listCourses} />);
    expect(wrapper.find(CourseListRow)).toHaveLength(5);
    expect(wrapper.find('thead').children()).toHaveLength(2);
    expect(wrapper.find('tbody').children()).toHaveLength(3);

    expect(wrapper.find(CourseListRow).get(0).props.isHeader).toEqual(true);
    expect(wrapper.find(CourseListRow).get(0).props.textFirstCell).toEqual('Available courses');
    expect(wrapper.find(CourseListRow).get(1).props.isHeader).toEqual(true);
    expect(wrapper.find(CourseListRow).get(1).props.textFirstCell).toEqual('Course name');
    expect(wrapper.find(CourseListRow).get(1).props.textSecondCell).toEqual('Credit');
    expect(wrapper.find(CourseListRow).get(2).props.isHeader).toEqual(false);
    expect(wrapper.find(CourseListRow).get(2).props.textFirstCell).toEqual('ES6');
    expect(wrapper.find(CourseListRow).get(2).props.textSecondCell).toEqual(60);
    expect(wrapper.find(CourseListRow).get(3).props.isHeader).toEqual(false);
    expect(wrapper.find(CourseListRow).get(3).props.textFirstCell).toEqual('Webpack');
    expect(wrapper.find(CourseListRow).get(3).props.textSecondCell).toEqual(20);
    expect(wrapper.find(CourseListRow).get(4).props.isHeader).toEqual(false);
    expect(wrapper.find(CourseListRow).get(4).props.textFirstCell).toEqual('React');
    expect(wrapper.find(CourseListRow).get(4).props.textSecondCell).toEqual(40);
  });

  // tests from task 4 of props project
  it('renders 5 specified rows', () => {
    const wrapper = shallow(<CourseList listCourses={listCourses} />);
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
