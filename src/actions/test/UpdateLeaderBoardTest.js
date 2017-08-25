import test from 'ava';
import configureMockStore from 'redux-mock-store';
import * as actions from '../../actions/index.js';
import sinon from 'sinon';
import axios from 'axios';
import ReduxPromise from 'redux-promise';
import { API_BASE_URL } from '../../config'

test('update leaderboard action test', t => {
  const responseStub = (url, headers) => {
    return new Promise((r) => r({
      data: ["Leaderboard updated"]
    }));
  }
  const axiosSpy = sinon.stub(axios, "get").callsFake(responseStub);
  const middlewares = [ReduxPromise];
  const mockStore = configureMockStore(middlewares);
  const expectedActions = [{
      type: 'UPDATE_LEADERBOARD',
      payload: {
        data: ["Leaderboard updated"]
      }
    }
  ];
  const expectedUrl = API_BASE_URL + "/leaderboard/course/214/update";
  const expectedHeaders = { headers: { Authorization: 'Bearer xyzzy'}};
  const store = mockStore({});
  return store.dispatch(actions.updateLeaderboard('xyzzy', '214')).then(() => {
      t.deepEqual(store.getActions(), expectedActions);
      t.is(axiosSpy.calledWith(expectedUrl, expectedHeaders), true);
  })
});