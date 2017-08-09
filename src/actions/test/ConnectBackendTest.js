import test from 'ava';
import configureMockStore from 'redux-mock-store';
import * as actions from '../../actions/index.js';
import sinon from 'sinon';
import axios from 'axios';
import ReduxPromise from 'redux-promise';
import storage from 'store';


test('connect backend action test', t => {
  const responseStub = (url, body) => {
    return new Promise((r) => r({ data: { data: { token: 'xyzzy.2nD_'}}}));
  }
  const axiosSpy = sinon.stub(axios, "post").callsFake(responseStub);
  sinon.stub(storage, "get").returns({username:'x', accessToken: 'y'});
  const middlewares = [ReduxPromise];
  const mockStore = configureMockStore(middlewares);
  const store = mockStore({});
  const expectedActions = [{ type: 'CONNECT_BACKEND', payload: { data: { data: { token: 'xyzzy.2nD_' }}}}];
  const expectedUrl = 'https://student-dashboard-api.herokuapp.com/new-dash-session';
  const expectedBody = {tmc_username: 'x', tmc_access_token:'y'};
  return store.dispatch(actions.connectBackend()).then(() => {
    t.deepEqual(store.getActions(), expectedActions);
    t.is(axiosSpy.calledWith(expectedUrl, expectedBody), true);
  })
});
