import { getCourses } from './courseSelector';
import coursesNormalizer from '../schema/courses';
import { Map, List } from 'immutable';

const testCourses = [
  {
    "id": "1",
    "name": "ES6",
    "credit": 60
  },
  {
    "id": "2",
    "name": "Webpack",
    "credit": 20
  },
  {
    "id": "3",
    "name": "React",
    "credit": 40
  }
];

const normalizedTestCoursesState = coursesNormalizer(testCourses)

describe('course selector', () => {
  it('verifies list of courses within reducer returned', () => {
    const res = getCourses(Map(normalizedTestCoursesState));
    expect(res).toEqual(
      List(Object.values(normalizedTestCoursesState.entities.courses))
    );
  });
});
