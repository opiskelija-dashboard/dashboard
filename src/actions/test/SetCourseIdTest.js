import test from 'ava';
import configureMockStore from 'redux-mock-store';
import { setCourseId } from '../../actions/index.js';
import ReduxPromise from 'redux-promise';

test('setCourseId action test', t => {
  const middlewares = [ReduxPromise];
  const mockStore = configureMockStore(middlewares);
  const store = mockStore({});
  const expectedActions = [{ type: 'SET_COURSE_ID', courseId: '214'}];
  store.dispatch(setCourseId('214'));
  t.deepEqual(store.getActions(), expectedActions);
});
