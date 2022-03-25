import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE, } from '../actions/courseActionTypes';
import { Map } from 'immutable';
import coursesNormalizer from '../schema/courses';

const initialState = Map([]);

function courseReducer(state = initialState, action) {
  if (action.type === FETCH_COURSE_SUCCESS) {
    const courses = action.data.map((course) => ({
      ...course,
      isSelected: false,
    }));
    const normalizedCourses = coursesNormalizer(courses);
    return state.merge(normalizedCourses);
  }

  else if (action.type === SELECT_COURSE)
    return state.setIn(
      ['entities', 'courses', action.index.toString(), 'isSelected'],
      true
    );

  else if (action.type === UNSELECT_COURSE)
    return state.setIn(
      ['entities', 'courses', action.index.toString(), 'isSelected'],
      false
    );

  else return state;
}

export { courseReducer, initialState };
