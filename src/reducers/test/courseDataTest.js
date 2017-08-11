import test from 'ava'
import {reducerTest} from 'redux-ava'
import reducer from '../courseData'
import {setCourseId} from '../../actions/'

test('courseData reducer handles course id correctly', reducerTest(
  //reducer to be tested
  reducer,
  //initial state
  {
    courseId: null
  },
  //action received in the reducer,
  setCourseId('214'),
  //expected state after the reducer code has run
  {
    courseId: '214'
  }
));