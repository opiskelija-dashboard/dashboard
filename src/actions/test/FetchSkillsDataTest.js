import test from 'ava';
import configureMockStore from 'redux-mock-store';
import * as actions from '../../actions/index.js';
import sinon from 'sinon';
import axios from 'axios';
import ReduxPromise from 'redux-promise';
import { API_BASE_URL } from '../../config'

test('fetch skills data test', t => {
  const responseStub = (url, headers) => {
    return new Promise((r) => r({
      data: {
        data: [
          {label:'while', user:5, all:7},
          {label:'if', user:1, all:3}
        ]
      }
    }));
  }
  const axiosSpy = sinon.stub(axios, "get").callsFake(responseStub);
  const middlewares = [ReduxPromise];
  const mockStore = configureMockStore(middlewares);
  const expectedActions = [{
      type: 'FETCH_SKILLS_DATA',
      payload: {
        data: {
          data: [{label:'while', user:5, all: 7}, {label:'if', user:1, all:3}]
        }
      }
    }
  ];
  const expectedUrl = API_BASE_URL + "/skill-mastery/course/214/combined";
  const expectedHeaders = { headers: { Authorization: 'Bearer xyzzy'}};
  const store = mockStore({});
  return store.dispatch(actions.fetchSkillsData('xyzzy', '214')).then(() => {
      t.deepEqual(store.getActions(), expectedActions);
      t.is(axiosSpy.calledWith(expectedUrl, expectedHeaders), true);
  })
});
