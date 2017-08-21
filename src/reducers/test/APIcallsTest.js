import test from 'ava'
import {reducerTest} from 'redux-ava'
import reducer from '../APIcalls.js'

test('APIcalls reducer handles daily points & course average correctly', reducerTest(
  //reducer to be tested
  reducer,
  //initial state
  {
    progressData: null,
    courseMaxPoints: 0,
    isFetching: true
  },
  //action received in the reducer
  { 
    type: 'FETCH_DAILY_POINTS',
    payload: { 
      data: {
        data:[
          {
            users_points: 1,
            everyones_average: 20,
            date: "2017-02-10"
          },
          {
            users_points: 2,
            everyones_average: 30,
            date: "2017-02-11"
          }
        ]
      }
    }
  },
  //expected state after the reducer code has run
  {
    progressData: {data:[
      {users_points: 1,  everyones_average: 20, date: "2017-02-10"},
      {users_points: 2, everyones_average: 30, date: "2017-02-11"}
    ]},
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
