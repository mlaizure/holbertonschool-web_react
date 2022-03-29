import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';
import { selectCourse, unSelectCourse, fetchCourseSuccess, fetchCourses } from './courseActionCreators';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

jest.mock('node-fetch', () => require('fetch-mock').sandbox());
const fetchMock = require('node-fetch');

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('course actions', () => {
  it('verifies calling selectCourse with 1 has correct output', () => {
    expect(selectCourse(1)).toEqual({ type: SELECT_COURSE, index: 1 });
  });

  it('verifies calling unSelectCourse with 1 has correct output', () => {
    expect(unSelectCourse(1)).toEqual({ type: UNSELECT_COURSE, index: 1 });
  });

  it('verifies that fetchCourses has correct output', () => {
    const store = mockStore({});
    fetchMock.get('/courses.json', ['test']);
    return store.dispatch(fetchCourses())
      .then(() => {
	const actions = store.getActions();
	expect(actions[0]).toEqual(fetchCourseSuccess(['test']));
      })
      .then(()=> fetchMock.restore());
  });
});
