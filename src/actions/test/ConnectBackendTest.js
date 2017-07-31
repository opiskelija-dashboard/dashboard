import test from 'ava'
import {connectBackend} from '../index.js';

test.beforeEach(t => {
   t.context.action = connectBackend();
});

test('connectBackend action has correct type ("CONNECT_BACKEND")', t => {
  t.is(t.context.action.type, "CONNECT_BACKEND");
});

test('action contains payload', t => {
  t.truthy(t.context.action.payload);
});

test('action.payload is a request (= an instance of Promise)', t => {
  t.truthy(t.context.action.payload instanceof Promise);
});

