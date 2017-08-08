import test from 'ava';
import configureMockStore from 'redux-mock-store';
import * as actions from '../../actions/index.js';
import sinon from 'sinon';
import axios from 'axios';
import ReduxPromise from 'redux-promise';
import storage from 'store';


test('connect backend action test', t => {
  var resolved = new Promise((r) => r({ data: { data: { token: 'xyzzy.2nD_'}}}));
  sinon.stub(axios, "post").returns(resolved);
  sinon.stub(storage, "get").returns({username:'x', accessToken: 'y'});
  var middlewares = [ReduxPromise];
  var mockStore = configureMockStore(middlewares);
  var expectedActions = [{ type: 'CONNECT_BACKEND', payload: { data: { data: { token: 'xyzzy.2nD_' }}}}];
  const store = mockStore({});
  return store.dispatch(actions.connectBackend()).then(() => {
      t.deepEqual(store.getActions(), expectedActions);
  })
});
