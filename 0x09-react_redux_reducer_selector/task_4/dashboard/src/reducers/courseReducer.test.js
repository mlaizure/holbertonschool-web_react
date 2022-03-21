import { courseReducer, initialState } from './courseReducer';
import { fetchCourseSuccess, selectCourse, unSelectCourse } from '../actions/courseActionCreators';
import coursesNormalizer from '../schema/courses';
import { Map } from 'immutable';

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

const normalizedUnselectedCourseList = coursesNormalizer(unselectedCourseList);

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

const normalizedEs6SelectedCourseList = coursesNormalizer(es6SelectedCourseList);

describe('courseReducer', () => {
  it('verifies default state returns empty array', () => {
    const res = courseReducer(undefined, 'no_action');
    expect(res.toJS()).toEqual(initialState.toJS());
  });

  it('verifies fetchCourseSuccess returns data passed', () => {
    const res = courseReducer(initialState, fetchCourseSuccess(unselectedCourseList));
    expect(res.toJS()).toEqual(normalizedUnselectedCourseList);
  });

  it('verifies selectCourse returns data with isSelected as true', () => {
    const res = courseReducer(Map(normalizedUnselectedCourseList), selectCourse(1));
    expect(res.toJS()).toEqual(normalizedEs6SelectedCourseList);
  });

  it('verifies unSelectCourse returns data with isSelected as false', () => {
    const res = courseReducer(Map(normalizedEs6SelectedCourseList), unSelectCourse(1));
    expect(res.toJS()).toEqual(normalizedUnselectedCourseList);
  });
});
