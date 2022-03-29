import { List } from 'immutable';

function getCourses(state) {
  const courses = state.getIn(['courses', 'entities', 'courses']) || [];
  return List(Object.values(courses));
}

export { getCourses };
