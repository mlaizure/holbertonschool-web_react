import { List } from 'immutable';

function getCourses(state) {
  const courses = state.getIn([ 'entities', 'courses']) || [];
  return List(Object.values(courses));
}

export { getCourses };
