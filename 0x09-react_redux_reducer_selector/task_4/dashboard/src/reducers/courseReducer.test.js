import { courseReducer, defaultState } from './courseReducer';
import { fetchCourseSuccess, selectCourse, unSelectCourse } from '../actions/courseActionCreators';

const unselectedCourseList = [
  {
    id: 1,
    name: "ES6",
    isSelected: false,
    credit: 60,
  },
  {
    id: 2,
    name: "Webpack",
    isSelected: false,
    credit: 20,
  },
  {
    id: 3,
    name: "React",
    isSelected: false,
    credit: 40,
  },
];

const es6SelectedCourseList = [
  {
    id: 1,
    name: "ES6",
    isSelected: true,
    credit: 60,
  },
  {
    id: 2,
    name: "Webpack",
    isSelected: false,
    credit: 20,
  },
  {
    id: 3,
    name: "React",
    isSelected: false,
    credit: 40,
  },
];

describe('courseReducer', () => {
  it('verifies default state returns empty array', () => {
    const res = courseReducer(undefined, 'no_action');
    expect(res).toEqual([]);
  });

  it('verifies fetchCourseSuccess returns data passed', () => {
    const res = courseReducer(defaultState, fetchCourseSuccess(es6SelectedCourseList));
    expect(res).toEqual(unselectedCourseList);
  });

  it('verifies selectCourse returns data with isSelected as true', () => {
    const res = courseReducer(unselectedCourseList, selectCourse(1));
    expect(res).toEqual(es6SelectedCourseList);
  });

  it('verifies unSelectCourse returns data with isSelected as false', () => {
    const res = courseReducer(es6SelectedCourseList, unSelectCourse(1));
    expect(res).toEqual(unselectedCourseList);
  });
});
