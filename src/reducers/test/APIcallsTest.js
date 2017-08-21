import test from 'ava'
import {reducerTest} from 'redux-ava'
import reducer from '../APIcalls.js'

test.skip('APIcalls reducer handles daily points & course average correctly', reducerTest(
  //reducer to be tested
  reducer,
  //initial state
  {
    progressData: null,
    progressAverage: null,
    courseMaxPoints: 0,
    isFetching: true
  },
  //action received in the reducer
  { 
    type: 'FETCH_DAILY_POINTS',
    payload: { 
      data: {
        data: {
          user: [{
            points: 0,
            day: "2017-02-10"
          }],
          average: {
            "2017-02-10": 5,
            "2017-02-11": 8,
            "2017-02-12": 10
          }
        }
      }
    }
  },
  //expected state after the reducer code has run
  {
    progressData: [{ points: 0, day: "2017-02-10" }],
    progressAverage: 10,
    courseMaxPoints: 1000,
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

test('APIcalls reducer handles http error correctly', reducerTest(
  reducer,
  {
    fetchError: false
  },
  {
    type: 'HANDLE_ERROR'
  },
  {
    fetchError: true
  } 
))

test('APIcalls reducer handles initial leaderboard data update correctly', reducerTest(
  reducer,
  {
    leaderboardUpdated: false
  },
  {
    type: 'UPDATE_LEADERBOARD',
    payload: {
      data: ["Leaderboard data updated"]
    }
  },
  {
    leaderboardUpdated: true
  }
))
