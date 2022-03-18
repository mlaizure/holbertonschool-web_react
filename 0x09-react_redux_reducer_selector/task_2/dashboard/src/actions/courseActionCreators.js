import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

function dispatch(arg) {
  return arg;
}

export function selectCourse(index) {
  return dispatch({ type: SELECT_COURSE, index });
}

export function unSelectCourse(index) {
  return dispatch({ type: UNSELECT_COURSE, index });
}
