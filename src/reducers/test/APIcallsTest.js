import test from 'ava'
import {reducerTest} from 'redux-ava'
import reducer from '../APIcalls.js'

test('APIcalls reducer handles daily points & course average correctly', reducerTest(
  //reducer to be tested
  reducer,
  //initial state
  {
    progressData: null,
    progressLabels: null,
    progressAverage: null,
    courseMaxPoints: 0,
    isFetching: true
  },
  //action received in the reducer
  { 
    type: 'FETCH_DAILY_POINTS',
    payload: { 
      data: {
        points: [0,2,4],
        days: ["2017-02-10", "2017-02-11", "2017-02-12"],
        average: 5 
      }
    }
  },
  //expected state after the reducer code has run
  {
    progressData: [0,2,4],
    progressLabels: ["2017-02-10", "2017-02-11", "2017-02-12"],
    progressAverage: 5,
    courseMaxPoints: 50,
    isFetching: false
  }
));


test('APIcalls reducer handles jwt token correctly', reducerTest(
  reducer,
  {
    dashboard_token: null
  },
  {
    type: 'CONNECT_BACKEND',
    payload: {
      data: {
        data: {
          token: "xyzzy.2nD_"
        }
      }
    }
  },
  {
    dashboard_token: "xyzzy.2nD_"
  }
))


test('APIcalls reducer handles skills data correctly', reducerTest(
  reducer,
  {
    skillsData: null
  },
  {
    type: 'FETCH_SKILLS_DATA',
    payload: {
      data: {
        skill_percentage: [{ label: 'if', user: 4, average: 6 },
          {label: 'while' , user: 0, average: 3 }]
      }
    }
  },
  {
    skillsData: [{ label: 'if', user: 4, average: 6 },
      {label: 'while' , user: 0, average: 3 }]
  }
))