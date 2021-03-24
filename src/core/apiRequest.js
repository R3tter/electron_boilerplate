import store from 'src/renderer/store';
import { apiRequestRedux } from 'api-req-redux';

const getHeaders = state => [
  ['Content-Type', 'application/json']
];

export const apiRequest = apiRequestRedux({
  store: () => store,
  headers: getHeaders,
});
