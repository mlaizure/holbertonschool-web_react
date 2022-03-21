import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE, } from '../actions/courseActionTypes';

const defaultState = [];

function courseReducer(state = defaultState, action) {
  if (action.type === FETCH_COURSE_SUCCESS)
    return action.data.map((course) => ({
      ...course,
      isSelected: false,
    }));

  else if (action.type === SELECT_COURSE)
    return state.map((course) => {
      if (course.id === action.index)
	return {
	  ...course,
	  isSelected: true,
	};
      else return course;
    });

  else if (action.type === UNSELECT_COURSE)
    return state.map((course) => {
      if (course.id === action.index)
	return {
	  ...course,
	  isSelected: false,
	};
      else return course;
    });

  else return state;
}

export { courseReducer, defaultState };
