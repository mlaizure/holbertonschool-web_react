import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from './courseActionTypes';
import fetch from 'node-fetch';

function dispatch(arg) {
  return arg;
}

export function selectCourse(index) {
  return dispatch({ type: SELECT_COURSE, index });
}

export function unSelectCourse(index) {
  return dispatch({ type: UNSELECT_COURSE, index });
}

export function fetchCourseSuccess(data) {
  return dispatch({ type: FETCH_COURSE_SUCCESS, data });
}

export function fetchCourses() {
    return function(dispatch) {
    return fetch('/courses.json')
      .then(response => response.json())
      .then(data => dispatch(fetchCourseSuccess(data)))
      .catch(err => console.log(err))
  };
}
