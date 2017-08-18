import test from 'ava';
import configureMockStore from 'redux-mock-store';
import * as actions from '../../actions/index.js';
import sinon from 'sinon';
import axios from 'axios';
import ReduxPromise from 'redux-promise';
import { API_BASE_URL } from '../../config';

test('fetch daily points action test', t => {
  const responseStub = (url, headers) => {
    return new Promise((r) =>
      r({ data: { points:[0,2], days:["2017-02-01", "2017-02-02"], average:5 }})
    );
  };
  const axiosSpy = sinon.stub(axios, "get").callsFake(responseStub);
  const middlewares = [ReduxPromise];
  const mockStore = configureMockStore(middlewares);
  const store = mockStore({});
  const expectedActions = [{
    type: 'FETCH_DAILY_POINTS', 
    payload: { 
      data: { 
        points:[0,2], 
        days:["2017-02-01", "2017-02-02"], 
        average:5 
      }
    }
  }];
  const expectedUrl = API_BASE_URL + '/cumulative-points/course/214';
  return store.dispatch(actions.fetchDailyPoints('xyzzy.2nD_', '214')).then(() => {
    t.deepEqual(store.getActions(), expectedActions);
    t.is(axiosSpy.calledWith(expectedUrl, 
      { headers: { Authorization: 'Bearer xyzzy.2nD_'}}), true)
  });
});
