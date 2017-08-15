import test from 'ava'
import {reducerTest} from 'redux-ava'
import reducer from '../courseData'
import {setCourseId} from '../../actions/'

test('courseData reducer handles course id correctly', reducerTest(
  reducer,
  //initial state
  {
    courseId: null
  },
  //action
  setCourseId('214'),
  //expected outcome
  {
    courseId: '214'
  }
));